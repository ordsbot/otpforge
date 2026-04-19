# OTPForge

Local TOTP / 2FA codes, stored in a local JSON vault.

- Repo: https://github.com/ordsbot/otpforge
- Website: https://ordsbot.github.io/otpforge/

## Quickstart

```bash
python3 cli.py list
python3 cli.py list --codes
```

## Vault location

- Default: `~/.config/otpforge/secrets.json`
- Override with env var: `OTPFORGE_STORE=/path/to/secrets.json`
- Override with flag: `python3 cli.py --store /path/to/secrets.json ...`

## Website (marketing/docs)

The website lives in `website/` (Vite + React + TypeScript) and deploys to GitHub Pages via GitHub Actions.

### Dev

```bash
cd website
npm install
npm run dev
```

### Build

```bash
cd website
npm ci
npm run build
```
