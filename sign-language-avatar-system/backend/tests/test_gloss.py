"""Regression tests for the bugs fixed in v1.1. Run: cd backend && python -m pytest"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from gloss_generator import GlossGenerator

g = GlossGenerator()
glosses = lambda text: [t["gloss"] for t in g.translate(text)[0]]


def test_metadata_key_is_not_a_sign():
    assert "_comment" not in g.signs and len(g.signs) == 35


def test_synonym_does_not_override_existing_sign():
    assert glosses("where is the hospital") == ["WHERE", "HOSPITAL"]  # was WHERE DOCTOR


def test_synonym_still_applies_when_no_sign_exists():
    assert glosses("I need a nurse")[-1] == "DOCTOR"


def test_tamil_input():
    assert glosses("வணக்கம் நன்றி") == ["HELLO", "THANK-YOU"]  # was silently dropped


def test_hindi_input_and_copula_dropped():
    assert glosses("नमस्ते, पानी कहाँ है") == ["HELLO", "WATER", "WHERE"]


def test_unmapped_non_latin_words_are_reported():
    tokens, unmapped = g.translate("पानी चाहिए")
    assert [t["gloss"] for t in tokens] == ["WATER"] and unmapped == ["चाहिए"]


def test_unknown_latin_word_is_fingerspelled():
    t = g.translate("Ravi")[0][0]
    assert t["type"] == "fingerspell" and t["letters"] == list("RAVI")
