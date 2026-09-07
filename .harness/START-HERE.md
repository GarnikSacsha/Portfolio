# Start Here — Operating Workflow

Before making any changes in this repository, strictly follow this ordered entry sequence:

1. **Read [AGENTS.md](../AGENTS.md)** — Project rules, behavioral guardrails, and non-negotiables.
2. **Read [README.md](../README.md)** — Core positioning, selected work, architecture, and project structure.
3. **Read [.harness/CONTEXT.md](CONTEXT.md)** — Product context, verified URLs, deployable directory, and privacy constraints.
4. **Read [.harness/STATUS.md](STATUS.md)** — Current project milestones, verified SHAs, and active gates.
5. **Read [.harness/commands.md](commands.md)** — Approved verification, lint, server, and QA commands.
6. **Execute Preflight:**
   ```powershell
   git status --short
   git log -2 --oneline
   ```
7. **Proceed with bounded changes only** within the authorized scope.
