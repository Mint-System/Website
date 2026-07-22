---
title: "publish state for jobs"
state: completed
model: infomaniak/moonshotai/Kimi-K2.6
input_tokens: 
---

# Run 01

Note: @Clanker refers to the "ai agent" (you) who is working on this task.

@Clanker when working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on the task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

I have added `publish` attribute to the list of jobs in `content/en/jobs/index.md`.

Now I want to jobs with publish false to hidden. If not jobs are shown then a message should appear.

```
no_jobs_text: Aktuell haben wir keine offenen Stellen. Wir schätzen dein Interesse und würden uns freuen dennoch von dir zu hören.
```

I expect that `layouts/_default/jobs/list.html` needs to be updated.

## Worklog

- Updated `layouts/shortcodes/text-two-col.html` to filter the jobs list by `publish` attribute, excluding items where `publish: false`.
- Added conditional logic to display `no_jobs_text` message when no jobs remain after filtering.
- Added `no_jobs_text` parameter to `content/en/jobs/index.md` and `content/de/jobs/_index.md` frontmatter with the German text provided.
- Added `publish: false` to all job entries in the German `content/de/jobs/_index.md` to match the English content.
- Fixed duplicate `layout` key in German page (`content/de/jobs/_index.md`) causing a Hugo build error.
- Verified the Hugo build succeeds and the "no jobs" message renders correctly in the output HTML.
- Aligned `layouts/_default/jobs/list.html` wrapper and title styling with `single.html` (matching spacing and heading size classes).
- Added `pt-8` to the jobs grid container in the shortcode for better visual separation.
- Fixed white hero text readability on bright background images: applied inline `background-color: rgba(0,0,0,0.4)` directly to the hero `<h1>` only (not the entire text container).
- Added `rounded-2xl p-4` to the hero `<h1>` for a rounded, padded text backdrop.
- Removed `hyphens-auto` from the hero `<h1>` to prevent mid-word breaks (e.g., "Produktionspla-nung").

@Clanker Set frontmatter state to completed and update info about model and token usage.
