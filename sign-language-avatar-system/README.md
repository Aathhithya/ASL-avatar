# SignSync — 3D Sign Language Avatar System (v1.1)

Speech/text → sign-language gloss → animated 3D avatar.

## Run
```bash
# backend (Python 3.10+)
cd backend && python -m venv venv && venv\Scripts\activate   # macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
python app.py                      # http://127.0.0.1:8000

# frontend (Node 18+)
cd frontend && npm install && npm run dev      # http://localhost:5173
```
Set `VITE_API_URL` in `frontend/.env` if the backend is elsewhere (see `.env.example`).
Tests: `cd backend && pip install pytest && python -m pytest`

## What changed in v1.1
**Bug fixes**
- Tamil / Hindi input was silently dropped; now translated via `backend/indic_lexicon.json` (91 words → the 35 signs). Words with no sign are returned in `unmapped` and flagged in History.
- Synonyms no longer override real signs (`hospital` was turned into `DOCTOR`).
- `_comment` in `sign_library.json` was loaded as a sign (36 instead of 35).
- `lerpFingers` never animated the second finger joint (`fB[1] - fB[1]`), and finger splay was not interpolated.
- `three` was imported but missing from `package.json` (fresh installs could not build).
- `requirements.txt` listed Flask/eventlet/spaCy; the app is FastAPI. Now fastapi + uvicorn.
- Style switching leaked material settings (e.g. Cyber left hands metallic); styles now reset cleanly.
- CORS: `allow_origins=*` with credentials is invalid; credentials disabled. Bare `except:` fixed.
- Hard-coded API URL replaced by `VITE_API_URL`. Removed bundled virtualenvs from the archive.

**Avatar** — four human presets (light / tan / brown / deep): face with eyes, brows, nose, mouth, ears, hair, clothing, blinking, and working expressions (smile, serious, focused, question). The expression data in `poses.js` was previously never rendered. Original mannequin/android styles are kept.

**History tab** — every phrase (voice, typed, quick prompt, dictionary) is saved in the browser (up to 200). Search, filter by input type, grouped by day, **Replay** on the avatar, copy gloss, delete, export JSON, clear all.

## Known limits
- Tamil/Hindi translation needs the backend running; the offline fallback is English only.
- The lexicon covers only the 35 signs, is word-for-word, and should be reviewed by native speakers.
- Poses are hand-authored approximations (the signs are ASL-style); have signers review before real use.
- History is per-browser (localStorage), not synced across devices.
