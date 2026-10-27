"""
NLP Text-to-Gloss & Sign Sequence Generator
Converts natural language sentences (speech or typed text) into structured Sign Language Gloss tokens.
"""

import json
import os
import re
import unicodedata
from typing import List, Dict, Any

class GlossGenerator:
    def __init__(self, library_path: str = None):
        if library_path is None:
            current_dir = os.path.dirname(os.path.abspath(__file__))
            library_path = os.path.join(current_dir, "sign_library.json")
        
        self.library = self._load_library(library_path)
        self.signs = self.library.get("signs", {})
        self.compounds = self.library.get("compounds", {})
        self.indic = self._load_indic_lexicon(os.path.join(os.path.dirname(library_path), "indic_lexicon.json"))
        
        # Common English contractions
        self.contractions = {
            r"what's": "what is",
            r"where's": "where is",
            r"who's": "who is",
            r"how's": "how is",
            r"don't": "no",
            r"didn't": "no",
            r"can't": "no",
            r"won't": "no",
            r"i'm": "i",
            r"you're": "you",
            r"they're": "they",
            r"we're": "we",
            r"it's": "it",
        }
        
        # Synonyms mapped to standardized glosses
        self.synonyms = {
            "HI": "HELLO",
            "HEY": "HELLO",
            "GREETINGS": "HELLO",
            "THANKS": "THANK-YOU",
            "ASSIST": "HELP",
            "ASSISTANCE": "HELP",
            "AID": "HELP",
            "PHYSICIAN": "DOCTOR",
            "NURSE": "DOCTOR",
            "CLINIC": "DOCTOR",
            "HOSPITAL": "DOCTOR",
            "MEDIC": "DOCTOR",
            "BEVERAGE": "WATER",
            "DRINK": "WATER",
            "URGENT": "EMERGENCY",
            "CRITICAL": "EMERGENCY",
            "APOLOGY": "SORRY",
            "APOLOGIZE": "SORRY",
            "PARDON": "SORRY",
            "EXCUSE": "SORRY",
            "FINE": "GOOD",
            "GREAT": "GOOD",
            "AWESOME": "GOOD",
            "WELL": "GOOD",
            "NICE": "GOOD",
            "TERRIBLE": "BAD",
            "AWFUL": "BAD",
            "POOR": "BAD",
            "HALT": "STOP",
            "PAUSE": "STOP",
            "QUIT": "STOP",
            "CEASE": "STOP",
            "LEAVE": "GO",
            "DEPART": "GO",
            "MOVE": "GO",
            "WALK": "GO",
        }
        
        # Sign Language Stopwords (filtered in ASL / Sign Grammar)
        self.stopwords = {
            "A", "AN", "THE", "IS", "AM", "ARE", "WAS", "WERE",
            "BE", "BEEN", "BEING", "TO", "OF", "AND", "OR", "AT", "BY", "FOR", "IN",
            # Hindi copulas / postpositions (no sign equivalent)
            "है", "हैं", "था", "थी", "का", "की", "के", "में", "को", "से", "पर", "और",
        }

    def _load_library(self, path: str) -> Dict[str, Any]:
        if os.path.exists(path):
            try:
                with open(path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if "signs" in data:
                        return data
                    # Direct dictionary format; skip metadata keys such as "_comment"
                    signs = {k: v for k, v in data.items() if not k.startswith("_")}
                    return {"signs": signs, "compounds": {}}
            except Exception as e:
                print(f"[GlossGenerator] Warning loading sign library: {e}")
        return {"signs": {}, "compounds": {}}

    def _load_indic_lexicon(self, path: str) -> Dict[str, str]:
        """Flattened Tamil + Hindi word -> gloss map (empty if file missing)."""
        merged: Dict[str, str] = {}
        try:
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
            for lang, words in data.items():
                if lang.startswith("_"):
                    continue
                merged.update({unicodedata.normalize("NFC", k): v for k, v in words.items()})
        except Exception as e:
            print(f"[GlossGenerator] Indic lexicon not loaded: {e}")
        return merged

    def normalize_text(self, text: str) -> str:
        """Cleans and standardizes raw input text."""
        if not text:
            return ""
        
        text = text.lower().strip()
        
        # Expand contractions
        for pattern, replacement in self.contractions.items():
            text = re.sub(r"\b" + pattern + r"\b", replacement, text)
        
        # Remove punctuation/symbols (Unicode-aware, so Tamil/Hindi letters and
        # combining vowel signs survive). Hyphens are kept for THANK-YOU style glosses.
        text = unicodedata.normalize("NFC", text)
        text = "".join(
            " " if (unicodedata.category(c)[0] in "PS" and c != "-") else c for c in text
        )
        text = re.sub(r"\s+", " ", text).strip()
        return text

    def text_to_gloss_tokens(self, text: str) -> List[Dict[str, Any]]:
        """Converts text into sequential sign tokens (see translate() for unmapped words)."""
        return self.translate(text)[0]

    def translate(self, text: str):
        """Returns (tokens, unmapped). `unmapped` lists non-Latin words with no sign."""
        clean = self.normalize_text(text)
        if not clean:
            return [], []
        unmapped: List[str] = []
        
        words = clean.upper().split()
        tokens = []
        i = 0
        
        while i < len(words):
            # 1. Check 2-word compound match (e.g. "THANK YOU", "WHERE IS")
            if i + 1 < len(words):
                two_word = f"{words[i]} {words[i+1]}"
                if two_word in self.compounds:
                    gloss = self.compounds[two_word]
                    tokens.append(gloss)
                    i += 2
                    continue
                
                # Check hyphenated compound (e.g. THANK-YOU)
                hyphenated = f"{words[i]}-{words[i+1]}"
                if hyphenated in self.signs:
                    tokens.append(hyphenated)
                    i += 2
                    continue
            
            w = words[i]
            # 2a. Tamil / Hindi lexicon (words are not uppercased-sensitive)
            if w in self.indic:
                w = self.indic[w]
            # 2b. Synonyms apply only when the word has no sign of its own
            #     (previously HOSPITAL was rewritten to DOCTOR even though HOSPITAL exists)
            elif w not in self.signs and w in self.synonyms:
                w = self.synonyms[w]
            
            # 3. Filter stopwords unless it's the only word
            if w in self.stopwords and len(words) > 1:
                i += 1
                continue
            
            tokens.append(w)
            i += 1
        
        # Build structured tokens with clip/fingerspell metadata
        result = []
        for word in tokens:
            if word in self.signs:
                sign_info = self.signs[word]
                result.append({
                    "gloss": word,
                    "type": "clip",
                    "category": sign_info.get("category", "general"),
                    "duration_ms": sign_info.get("duration_ms", 900),
                    "description": sign_info.get("description", ""),
                })
            else:
                # Word not in 3D clip dictionary -> fallback to Fingerspelling
                letters = list(re.sub(r"[^A-Z0-9]", "", word))
                if not letters:
                    unmapped.append(word)  # e.g. a Tamil/Hindi word we have no sign for
                if letters:
                    result.append({
                        "gloss": word,
                        "type": "fingerspell",
                        "letters": letters,
                        "duration_ms": max(600, len(letters) * 350),
                        "description": f"Fingerspelling word letter-by-letter: {'-'.join(letters)}",
                    })
        
        return result, unmapped


# Singleton instance and helper function for direct functional import
_default_generator = GlossGenerator()

def generate_gloss(text: str) -> List[str]:
    """Top-level helper function for compatibility."""
    tokens = _default_generator.text_to_gloss_tokens(text)
    return [t["gloss"] for t in tokens]
