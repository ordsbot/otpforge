import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <h1>OTPForge</h1>
          <p className="tagline">Local TOTP / 2FA codes, no cloud required.</p>
        </div>
        <nav className="nav">
          <a href="#install">Install</a>
          <a href="#usage">Usage</a>
          <a href="#security">Security</a>
          <a href="#links">Links</a>
        </nav>
      </header>

      <main className="main">
        <section className="card">
          <h2>What it is</h2>
          <p>
            OTPForge is a small Python tool for managing TOTP secrets and generating
            current 2FA codes from a local vault.
          </p>
          <ul>
            <li>CLI for add/list/remove and generating codes</li>
            <li>Optional Tkinter GUI</li>
            <li>Secrets stored locally (JSON vault)</li>
          </ul>
        </section>

        <section id="install" className="card">
          <h2>Install</h2>
          <p>Clone the repo and run with Python 3:</p>
          <pre>
            <code>{`git clone https://github.com/ordsbot/otpforge
cd otpforge
python3 cli.py list`}</code>
          </pre>
        </section>

        <section id="usage" className="card">
          <h2>Usage</h2>
          <pre>
            <code>{`# list accounts
python3 cli.py list

# list with current codes
python3 cli.py list --codes

# add / update
python3 cli.py add "GitHub" "BASE32SECRET" --issuer "GitHub"

# get one code
python3 cli.py code "GitHub"`}</code>
          </pre>
          <p>
            Default vault location: <code>~/.config/otpforge/secrets.json</code>
          </p>
        </section>

        <section id="security" className="card">
          <h2>Security notes</h2>
          <ul>
            <li>Never commit your vault file to git.</li>
            <li>TOTP secrets are as sensitive as passwords.</li>
            <li>Prefer using a separate OS user profile if you share your machine.</li>
          </ul>
        </section>

        <section id="links" className="card">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://github.com/ordsbot/otpforge">GitHub repository</a>
            </li>
            <li>
              <a href="https://ordsbot.github.io/otpforge/">This website</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Ords</span>
      </footer>
    </div>
  )
}

export default App
