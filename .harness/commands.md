# Project Commands

This guide lists verified, executable commands for maintaining and inspecting the Portfolio repository.

## 1. Local Development Server
Run a lightweight local HTTP server serving the deployable `dist/` directory:

```powershell
python -m http.server 8080 --directory dist
```
Then navigate to:
```text
http://localhost:8080
```

## 2. Syntax & Script Validation
Verify vanilla JavaScript syntax in `dist/app.js`:

```powershell
node --check dist/app.js
```

## 3. Git Status & Tracked File Checks
Check working tree status:

```powershell
git status --short
```

Verify that all tracked files belong strictly to approved production or documentation scopes:

```powershell
git ls-files
```

Confirm that local reference directories `Ref/` and `Review/` are untracked:

```powershell
git ls-files Ref Review
```
*(Expected output: empty)*

Inspect commit author and committer metadata:

```powershell
git log --format="%h %an <%ae> | %cn <%ce> | %s" -n 5
```

## 4. Local Asset Link Integrity Check
Verify that all asset paths referenced in `dist/index.html` exist on disk:

```powershell
node -e "
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('dist/index.html', 'utf8');
const regex = /(?:src|href)=\"([^\"]+)\"/g;
let match;
let missing = 0;
while ((match = regex.exec(html)) !== null) {
  const target = match[1];
  if (!target.startsWith('http') && !target.startsWith('#') && !target.startsWith('mailto:')) {
    const cleanPath = target.split('?')[0];
    const fullPath = path.join('dist', cleanPath);
    if (!fs.existsSync(fullPath)) {
      console.error('Missing asset:', cleanPath);
      missing++;
    }
  }
}
if (missing === 0) console.log('All local asset paths exist in dist/.');
"
```

## 5. Viewport Overflow Check
Inspect elements that exceed the document viewport width in the browser console:

```javascript
// Run in browser Developer Tools Console:
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.warn('Horizontal overflow detected on element:', el);
  }
});
```
