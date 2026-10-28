# Project rules

**First, every session:** if `.core/AGENTS.md` does not exist, run `./scripts/setup.sh` before anything else. It fetches the shared core into `.core/`. Then read `.core/AGENTS.md`, and if `docs/brief.md` is not filled in yet, follow `.core/skills/kickoff/SKILL.md`. In Claude Code a session hook does this for you.

Read and follow `.core/AGENTS.md` first. It holds the shared house rules, and the skills are in `.core/skills/`.

This project uses the profile in `.buildkit`. It starts as `unset` until the person says who it is for, see "Choosing the profile" in `.core/AGENTS.md`. For prototypes, speed matters more than polish, but secrets and real personal data still block.

## About this prototype

See `docs/brief.md`. Add project-specific rules below this line.
