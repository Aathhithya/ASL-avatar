import { useMemo, useState } from "react";

const SOURCES = [
  { id: "all", label: "All" },
  { id: "voice", label: "🎙️ Voice" },
  { id: "typed", label: "⌨️ Typed" },
  { id: "prompt", label: "⚡ Quick" },
  { id: "direct", label: "📚 Dictionary" },
];

function dayLabel(iso) {
  const d = new Date(iso);
  const today = new Date();
  const yesterday = new Date(Date.now() - 86400000);
  if (d.toDateString() === today.toDateString()) return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

/**
 * History tab: every phrase translated, searchable, replayable on the avatar.
 */
export default function HistoryPanel({ entries, onReplay, onDelete, onClear }) {
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      if (source !== "all" && !(source === "direct" ? ["direct", "keyboard"].includes(e.source) : e.source === source)) return false;
      if (!q) return true;
      return e.text.toLowerCase().includes(q) || e.tokens.some((t) => t.gloss.toLowerCase().includes(q));
    });
  }, [entries, query, source]);

  const groups = useMemo(() => {
    const out = [];
    visible.forEach((e) => {
      const label = dayLabel(e.at);
      const last = out[out.length - 1];
      if (last && last.label === label) last.items.push(e);
      else out.push({ label, items: [e] });
    });
    return out;
  }, [visible]);

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `signsync-history-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleClear = () => {
    if (window.confirm(`Delete all ${entries.length} history entries? This cannot be undone.`)) onClear();
  };

  const totalSigns = entries.reduce((n, e) => n + e.tokens.length, 0);

  return (
    <div className="studio-card history-panel">
      <div className="card-header-bar">
        <div>
          <h3 className="card-heading">Translation History ({entries.length})</h3>
          <p className="card-subheading">
            {entries.length} phrases · {totalSigns} signs · saved in this browser
          </p>
        </div>
        {entries.length > 0 && (
          <div className="history-actions">
            <button type="button" className="transcript-action-btn" onClick={exportJson}>⬇ Export</button>
            <button type="button" className="transcript-action-btn danger" onClick={handleClear}>Clear all</button>
          </div>
        )}
      </div>

      {entries.length > 0 && (
        <div className="history-toolbar">
          <input
            className="history-search"
            type="search"
            placeholder="Search phrases or signs…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="history-filters">
            {SOURCES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`history-filter-chip ${source === s.id ? "active" : ""}`}
                onClick={() => setSource(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {entries.length === 0 ? (
        <div className="empty-history-state">
          <span className="empty-icon">🕘</span>
          <p>No history yet.</p>
          <span className="empty-sub">Phrases you speak, type or pick from the dictionary will appear here.</span>
        </div>
      ) : visible.length === 0 ? (
        <div className="empty-history-state"><p>No entries match your search.</p></div>
      ) : (
        <div className="history-list">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="history-day">{g.label}</div>
              {g.items.map((e) => (
                <div key={e.id} className="history-entry">
                  <div className="history-entry-top">
                    <span className="history-text">{e.text}</span>
                    <span className="history-meta">
                      {e.source} · {new Date(e.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div className="history-gloss">
                    {e.tokens.map((t, i) => (
                      <span key={i} className={`history-chip ${t.type}`} title={t.type === "clip" ? "3D sign" : "Fingerspelled"}>
                        {t.type === "fingerspell" ? "🔤 " : ""}{t.gloss}
                      </span>
                    ))}
                  </div>
                  {e.unmapped?.length > 0 && (
                    <div className="history-warn">⚠ No sign yet for: {e.unmapped.join(", ")}</div>
                  )}
                  <div className="history-entry-actions">
                    <button type="button" className="history-btn primary" onClick={() => onReplay(e)}>▶ Replay</button>
                    <button type="button" className="history-btn" onClick={() => navigator.clipboard?.writeText(e.tokens.map((t) => t.gloss).join(" "))}>Copy gloss</button>
                    <button type="button" className="history-btn danger" onClick={() => onDelete(e.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
