# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Usage section in `README.md` explaining clone, prepare and development workflow.
- Section-grouped help table in `task`.
- Blog posts "Unser Agenten-Setup und LLM-Workflow" and "Odoo Website Apps mit KI entwickeln" with images.
- Typography page example showing headings h1 to h5.
- Border, padding and horizontal scroll for code blocks in blog posts.
- `@tailwindcss/typography` plugin for the `prose` styles used by blog and job posts.

### Changed

- Replaced local Hugo tasks (`install`, `build-hugo`, `serve-hugo`, `dev-hugo`, `version`) with the `taskfile.build` commands `install-hugo`, `build-hugo-site`, `serve-hugo-site` and `dev-hugo-site`.
- Added `task prepare-hugo-site` to build the Tailwind assets.
- Blog post filenames are prefixed with their date; `slug` is pinned in the frontmatter so URLs stay unchanged.
- `task new-post` now creates date-prefixed files and sets the slug automatically.
- Layouts use flat names (`blogpost-single`, `blog-list`, `jobs-single`, `jobs-list`) instead of slash-separated paths, which Hugo 0.146+ no longer resolves.

### Fixed

- Headings h4 and h5 in blog posts were rendered at body text size.
- Blog posts fell back to `single.html`, losing hero, prose typography, share buttons and tags.
- Empty `![]()` placeholder rendered a broken image at the top of the agent setup post.
- `/jobs/` returned 404 because the English jobs page was a leaf (`index.md`) while the German one was a branch (`_index.md`), so Hugo dropped the German section. Both are now branch pages using `jobs-list`.
- Removed redundant `type` overrides from job posts that collided with the `jobs` section permalink.
- Added `slug` to job posts so the `jobs` permalink rule resolves to `/jobs/<slug>/`.