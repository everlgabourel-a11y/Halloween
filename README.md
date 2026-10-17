# ELREMOTE GitHub Pages frontend

These are the static website files prepared for the repository `everlgabourel-a11y/ELREMOTE`. Upload the contents of this folder (not the folder itself) to the repository root.

## Publish
1. Open https://github.com/everlgabourel-a11y/ELREMOTE
2. Add file → Upload files. Upload `index.html`, `manifest.webmanifest`, `icon.svg`, `sw.js`, and this README.
3. Commit changes to `main`.
4. Settings → Pages → Build and deployment → Source: Deploy from a branch. Select `main` and `/(root)`, then Save.
5. Wait for deployment. The site should be at https://everlgabourel-a11y.github.io/ELREMOTE/

## Relay status
This is the static frontend only. It includes a relay URL field so the website can later target a separately hosted HTTPS/WSS relay. It will not control a PC until a compatible relay backend is deployed and configured to permit the GitHub Pages origin with appropriate CORS/WebSocket-origin checks and authentication. Do not put relay secrets, pairing codes, or PC credentials in this public repository.
