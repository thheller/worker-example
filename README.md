
`lein run -m build/dev`

Since Web Workers require a http server for security purposes you'll need something to serve the files in this repo.

Launching something like `python -m SimpleHTTPServer 8000` in the project root directory is enough.

Then open `http://localhost:8000/demo.html`


For a production build: `lein run -m build/production`, no need to touch the HTML. Just reload.