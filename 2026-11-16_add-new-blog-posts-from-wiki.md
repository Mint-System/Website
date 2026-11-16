---
commit_ref: f47451fd7783f974bba8c194727a94968a815f3b
title: "Add new blog posts from wiki"
author: "Janik von Rotz <login@janikvonrotz.ch>"
session_id: 01a1e35c-a0cb-77ef-91a2-3fd08c1cc94a
action: execute
state: completed
date_completed: 2026-11-16
harness: pi
provider: mistral
model: deepseek-v4-1-flash-1017
input_tokens: 334483
output_tokens: 34185
---

# Add new blog posts from wiki

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read the `AGENTS.md` to get an understanding of the project
- Read task section and prepare a list of todos
- Update the todo list while working on task

## Task

I have prepated these blog posts:

- `~/Wiki/Unser Agenten-Setup und LLM-Workflow.md`
- `~/Wiki/Odoo Website Apps mit KI entwickeln.md`

Use `t new-post` to create the blog posts. Then update frontmatter by using text from `>` as lead and generate a summary for each post.

Copy the text and images from the posts. I will add a banner myself.

@Clanker When task is completed set frontmatter state to review. If you have access to session info add token count and session id. Prompt the author to verify the results.

## Worklog

- Installed Hugo v0.141.0 with `./task install` (pnpm was unavailable, but `assets/style.css` already existed).
- Created `content/de/blog/posts/unser-agenten-setup-und-llm-workflow.md` and `content/de/blog/posts/odoo-website-apps-mit-ki-entwickeln.md` with `./task new-post`.
- Copied post text; lead taken from the wiki blockquote, summary, tags, seo_title and author added.
- Copied images to `assets/images/blog/`: `pi-context-usage.png` (renamed, spaces removed) and `pricelist-importer_01-04.png`.
- `featured_image` is set to the placeholder `bird-migration.png`; banner to be replaced by the author.
- Verified with `./hugo` build: both posts render and all images resolve.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness, provider and model. If you have access to session info update token count. Finally, update the changelog with the most important changes.
