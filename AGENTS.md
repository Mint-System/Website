# AGENTS.md

Note: @Clanker refers to the "ai agent" (you) who is working on this task.

## General

This section outlines the universal rules and expectations for any LLM agent working within this repository.

**Safety and Quality First:** The highest priority is to produce secure, well-documented, and high-quality code. Do not introduce vulnerabilities, hardcoded secrets, or unreadable code.

**Propose a Plan:** For any new task, first provide a brief plan of action. This plan should clearly outline the intended changes and the rationale behind them.

**Maintain Context:** Before making any changes, an agent must read and understand the relevant files, including the project's main documentation and existing code structure.

**Be Sparse:** Only introduce new code if needed. Comment only what is worth commenting. When testing focus on the business use case. When writing documentations keep the explanation to a minimum.

**Never Commit:** Do not run `git commit`, `git push`, or any other version control write operation. Only the author is allowed to commit changes. You may stage files, run diffs, and prepare commit messages, but the actual commit and push must be done by the author.

## Project

Hugo static site for Mint System GmbH, styled with Tailwind CSS. Bilingual (German default, English under `/en/`).

### Structure

- `content/de/`, `content/en/` – page content per language. `content/de` is the default language and is served at the root.
- `content/<lang>/blog/posts/` – blog posts. `_index.md` is the section page, posts are regular pages.
- `content/<lang>/jobs/` – job listings. `_index.md` holds the `jobs` list with a `publish` flag; job descriptions live in `posts/`.
- `layouts/_default/` – page templates: `blogpost-single.html`, `blog-list.html`, `jobs-single.html`, `jobs-list.html`, `single.html`, `home.html`, `tag.html`, `baseof.html`.
- `layouts/partials/` – `layout/` (head, header, footer, scripts, nav, schema), `hero/`, `components/`.
- `layouts/shortcodes/` – content building blocks used from Markdown (e.g. `text-two-col`, `contact-teaser`, `references`).
- `data/` – `employees.yaml`, `partners.yaml`, `references.yaml`, consumed by shortcodes.
- `assets/` – images, fonts, icons, JS and the compiled `style.css`. Mounted to `static/assets`.
- `bases/` – Obsidian Bases views (`Pages.base`, `Posts.base`).
- `archetypes/` – `default.md` is used by `hugo new`.

### Layout naming

Layouts use **flat names** referenced from frontmatter (`layout: blogpost-single`). Slash-separated values such as `blog/posts/posts` are not resolved by Hugo 0.146+ and silently fall back to `single.html`. There is no `layouts/_default/list.html`, so every section page needs an explicit `layout`.

### Section pages

A section and its language counterpart must use the same page kind. Mixing `index.md` (leaf) and `_index.md` (branch) for the same section makes Hugo drop one of them without an error. Both jobs sections use `_index.md`.

### Frontmatter

Blog posts require `title`, `date`, `type: blogpost`, `layout: blogpost-single`, plus optional `tags`, `featured_image`, `summary`, `lead`, `seo_title`, `author`. `slug` is set explicitly to pin the URL under `[permalinks] blog = "/blog/:slug/"`; without it Hugo falls back to the filename minus the date prefix.

### Styling

Tailwind is built from `layouts/style.css` into `assets/style.css` via `pnpm run build` (`task prepare-hugo-site`). Blog and job articles use `prose` classes, which come from the `@tailwindcss/typography` plugin configured in `tailwind.config.js`.

## Environment

### Taskfile

This project uses the <https://taskfile.build/> standard.

The `./task` file is a bash script that provides all functions necessary to work with this project.

Always try to run a command with the `./task` file script.

### Session Info (Pi harness)

Inside the **Pi** harness, session details are exposed as environment variables:

- `PI_MODEL` – model ID, e.g. `deepseek-v4-1-flash-1017`
- `PI_PROVIDER` – provider, e.g. `mistral`
- `PI_REASONING_LEVEL` – e.g. `off`
- `PI_SESSION_ID` – e.g. `01a1a57c-a4b1-777f-ac7b-6b912be9400a`
- `PI_SESSION_FILE` – path to the session log, e.g. `$HOME/.pi/agent/sessions/*/2026-11-04T07-36-11-698Z_01a1a57c-a4b1-777f-ac7b-6b912be9400a.jsonl`
- `AI_AGENT` – e.g. `Pi`
- `PI_CODING_AGENT` – e.g. `true`

The session log at `$PI_SESSION_FILE` is a JSONL file. Each assistant message carries token usage in `message.usage` (`input` and `output`). When completing a prompt file, extract the model and cumulative token counts from these sources:

```bash
jq -s '[.[] | select(.type == "message" and .message.usage) | .message.usage]
  | {input: (map(.input) | add // 0), output: (map(.output) | add // 0)}' "$PI_SESSION_FILE"
```

This prints the totals, e.g. `{"input": 19876, "output": 1064}`.

If `jq` is unavailable (e.g. inside a Gondolin micro-VM), use `node`:

```bash
node -e 'const l=require("fs").readFileSync(process.env.PI_SESSION_FILE,"utf8").split("\n").filter(Boolean);let i=0,o=0;for(const x of l){const m=JSON.parse(x);if(m.type==="message"&&m.message?.usage){i+=m.message.usage.input||0;o+=m.message.usage.output||0}}console.log(JSON.stringify({input:i,output:o}))'
```

### Temporary files

When creating temporary files and scripts, use the `./tmp` directory.

## Conventions

@Clanker document project specific coding conventions in this section.

