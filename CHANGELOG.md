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

### Changed

- Replaced local Hugo tasks (`install`, `build-hugo`, `serve-hugo`, `dev-hugo`, `version`) with the `taskfile.build` commands `install-hugo`, `build-hugo-site`, `serve-hugo-site` and `dev-hugo-site`.
- Added `task prepare-hugo-site` to build the Tailwind assets.
- Blog post filenames are prefixed with their date; `slug` is pinned in the frontmatter so URLs stay unchanged.
- `task new-post` now creates date-prefixed files and sets the slug automatically.

### Fixed

- Headings h4 and h5 in blog posts were rendered at body text size.