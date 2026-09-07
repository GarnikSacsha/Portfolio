# Portfolio Agent Contract

Project-level guidelines for AI coding assistants working in this repository.

## Golden Rules

1. **Start with Harness:** Always read `README.md` and `.harness/START-HERE.md` before taking action.
2. **Preflight First:** Run `git status --short`, verify active branch and `HEAD` before any changes. If working tree is dirty or unexpected, stop and report immediately.
3. **Closed Scope:** Change only explicitly authorized files for the active bounded task.
4. **Zero Unapproved Dependencies:** This is a zero-dependency vanilla HTML/CSS/JS project. Do not add `package.json`, build tooling, or runtime packages.
5. **Preserve Verified Product Truth:**
   - Do not alter approved product descriptions, project statuses, or metrics.
   - External URLs for STRATA, DZHERO, and Booking Automation are verified and locked.
   - Do not invent live links for Mama Prybrala or AccessFlow.
   - Do not add unverified claims, senior titles, or invented commercial experience.
6. **Privacy & Security:**
   - Never commit `.env`, credentials, bot tokens, personal emails, or private customer data.
   - Git commits must always use the GitHub noreply email configured locally (`262843242+GarnikSacsha@users.noreply.github.com`).
   - Never touch or track `Ref/` and `Review/`.
7. **Accessibility & Motion Budget:**
   - Preserve semantic HTML, ARIA labels, focus states (`:focus-visible`), and minimum 44px mobile touch targets.
   - Respect `@media (prefers-reduced-motion: reduce)` — keep animation/transition disablement intact.
   - Microanimations remain strictly scoped to interactive elements.
8. **Verification Rigor:**
   - Verify viewports: 360px, 390px, 414px, and 1440px.
   - Ensure zero horizontal overflow without global `overflow-x: hidden`.
   - Verify browser console: 0 errors and 0 warnings.
   - Verify all 4 filters (`6 / 2 / 1 / 3`), 3 preview links, and 3 CTA buttons.
   - Verify all local assets return HTTP 200.
9. **Git Discipline:**
   - Atomic, well-scoped commits with conventional commit messages.
   - Never deploy, push, force push, or create remote tags/branches without explicit user authorization.
