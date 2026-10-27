import { useState, useMemo } from "react";

const SIGN_CATEGORIES = [
  { id: "all", label: "All Signs", icon: "✨" },
  { id: "greetings", label: "Greetings", icon: "👋" },
  { id: "questions", label: "Questions", icon: "❓" },
  { id: "emergency", label: "Emergency & Health", icon: "🚨" },
  { id: "actions", label: "Actions", icon: "⚡" },
  { id: "sentiments", label: "Sentiments", icon: "👍" },
];

const SIGNS_DATA = [
  { gloss: "HELLO", category: "greetings", icon: "👋", desc: "Temple wave outward", duration: "900ms" },
  { gloss: "THANK-YOU", category: "greetings", icon: "🙏", desc: "Chin outward flat hand", duration: "900ms" },
  { gloss: "PLEASE", category: "greetings", icon: "🤲", desc: "Circular chest rub", duration: "900ms" },
  { gloss: "SORRY", category: "greetings", icon: "🙇", desc: "Fist circular chest rub", duration: "900ms" },

  { gloss: "WHERE", category: "questions", icon: "🧭", desc: "Palms up questioning sway", duration: "900ms" },
  { gloss: "WHAT", category: "questions", icon: "❔", desc: "Open palms side-to-side", duration: "900ms" },
  { gloss: "WHO", category: "questions", icon: "👤", desc: "Index finger circle chin", duration: "900ms" },
  { gloss: "NAME", category: "questions", icon: "🏷️", desc: "H-fingers tapping X", duration: "900ms" },

  { gloss: "HELP", category: "emergency", icon: "🆘", desc: "Thumbs up on flat palm lift", duration: "900ms" },
  { gloss: "DOCTOR", category: "emergency", icon: "🩺", desc: "M-fingers tap wrist pulse", duration: "900ms" },
  { gloss: "WATER", category: "emergency", icon: "💧", desc: "W-hand taps chin", duration: "900ms" },
  { gloss: "EMERGENCY", category: "emergency", icon: "🚨", desc: "E-handshake side to side", duration: "900ms" },

  { gloss: "GO", category: "actions", icon: "🏃", desc: "Index fingers flip forward", duration: "900ms" },
  { gloss: "STOP", category: "actions", icon: "🛑", desc: "Flat chop onto open palm", duration: "900ms" },

  { gloss: "YES", category: "sentiments", icon: "✅", desc: "Fist nodding up and down", duration: "900ms" },
  { gloss: "NO", category: "sentiments", icon: "❌", desc: "Snap fingers shut", duration: "900ms" },
  { gloss: "GOOD", category: "sentiments", icon: "🌟", desc: "Chin touch to left palm", duration: "900ms" },
  { gloss: "BAD", category: "sentiments", icon: "👎", desc: "Chin touch flipped down", duration: "900ms" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const SAMPLE_FINGERSPELL_WORDS = [
  "ASL", "AI", "CODE", "FUTURE", "ANTIGRAVITY", "ROBOT", "XYLOPHONE"
];

export default function DictionaryBrowser({ onTriggerSign, onTriggerFingerspell }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [keyboardMode, setKeyboardMode] = useState(false);

  // Filtered signs
  const filteredSigns = useMemo(() => {
    return SIGNS_DATA.filter((item) => {
      const matchesCat = activeCategory === "all" || item.category === activeCategory;
      const matchesQuery = !searchQuery.trim() || 
        item.gloss.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="dictionary-container">
      {/* Sub Header / Tab Switcher */}
      <div className="dict-toolbar">
        <div className="dict-mode-tabs">
          <button
            type="button"
            className={`dict-mode-btn ${!keyboardMode ? "active" : ""}`}
            onClick={() => setKeyboardMode(false)}
          >
            📚 Sign Library ({SIGNS_DATA.length})
          </button>
          <button
            type="button"
            className={`dict-mode-btn ${keyboardMode ? "active" : ""}`}
            onClick={() => setKeyboardMode(true)}
          >
            🔤 A-Z Fingerspell Board
          </button>
        </div>

        {!keyboardMode && (
          <div className="dict-search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="dict-search-input"
              placeholder="Filter signs (e.g. hello, help, doctor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="dict-search-clear"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>
        )}
      </div>

      {!keyboardMode ? (
        <>
          {/* Category Filter Chips */}
          <div className="category-chips-row">
            {SIGN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-chip ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Grid of Sign Cards */}
          <div className="sign-cards-grid">
            {filteredSigns.map((sign) => (
              <button
                key={sign.gloss}
                type="button"
                className="sign-action-card"
                onClick={() => onTriggerSign(sign.gloss)}
                title={`Click to animate 3D sign for "${sign.gloss}"`}
              >
                <div className="card-top">
                  <span className="card-icon">{sign.icon}</span>
                  <span className="card-badge">{sign.duration}</span>
                </div>
                <div className="card-gloss">{sign.gloss}</div>
                <div className="card-desc">{sign.desc}</div>
                <div className="card-footer-action">
                  <span>Sign Now</span>
                  <span className="arrow-icon">▶</span>
                </div>
              </button>
            ))}

            {filteredSigns.length === 0 && (
              <div className="no-signs-found">
                <span className="no-signs-icon">🔎</span>
                <p>No predefined signs found matching &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  type="button"
                  className="quick-fingerspell-btn"
                  onClick={() => onTriggerFingerspell(searchQuery.toUpperCase())}
                >
                  🔤 Fingerspell &ldquo;{searchQuery.toUpperCase()}&rdquo; on Avatar
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        /* A-Z Interactive Fingerspelling Keyboard */
        <div className="fingerspell-board-wrap">
          <div className="fingerspell-board-header">
            <div>
              <h4 className="board-title">Interactive ASL Fingerspelling Simulator</h4>
              <p className="board-subtitle">Click any letter to execute real-time 3D hand articulation</p>
            </div>
          </div>

          <div className="alphabet-grid">
            {ALPHABET.map((char) => (
              <button
                key={char}
                type="button"
                className="alphabet-key-btn"
                onClick={() => onTriggerFingerspell(char)}
                title={`Fingerspell letter ${char}`}
              >
                <span className="key-char">{char}</span>
                <span className="key-sub">ASL</span>
              </button>
            ))}
          </div>

          <div className="fingerspell-quick-words">
            <span className="quick-label">Try fingerspelling words:</span>
            <div className="quick-word-chips">
              {SAMPLE_FINGERSPELL_WORDS.map((word) => (
                <button
                  key={word}
                  type="button"
                  className="quick-word-chip"
                  onClick={() => onTriggerFingerspell(word)}
                >
                  🔤 {word}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
