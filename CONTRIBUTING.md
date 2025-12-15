# Contributing to Rainwears

Thanks for your interest in improving the Rainwears ecommerce project. This guide covers how to get set up and the expectations for contributions.

## Quick start
- Node.js 18+ and npm installed
- Install dependencies: `npm ci`
- Run the dev server: `npm run dev` and open http://localhost:3000

## Development workflow
- Keep changes small and focused; open draft PRs early for feedback.
- Run `npm run lint` before opening a PR to catch TypeScript and styling issues.
- Run `npm run build` to ensure the production build succeeds.
- Prefer TypeScript for any new code, and follow existing patterns for Tailwind classes and motion presets.

## Commit and PR guidelines
- Write clear, descriptive commit messages (e.g., `feat: add parka color selector`).
- Include screenshots or short videos for visual changes when opening a PR.
- Document any new configuration or scripts in the README if they affect setup or usage.

## Reporting issues
- Include steps to reproduce, expected vs. actual behavior, and environment details (OS, browser, Node version).
- For accessibility or performance issues, share supporting measurements (e.g., Lighthouse scores, a11y tooling output) when possible.
