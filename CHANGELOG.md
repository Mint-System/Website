# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Blog posts "Unser Agenten-Setup und LLM-Workflow" and "Odoo Website Apps mit KI entwickeln" with images.
- Typography page example showing headings h1 to h5.
- Border, padding and horizontal scroll for code blocks in blog posts.

### Changed

- Blog post filenames are prefixed with their date; `slug` is pinned in the frontmatter so URLs stay unchanged.
- `task new-post` now creates date-prefixed files and sets the slug automatically.

### Fixed

- Headings h4 and h5 in blog posts were rendered at body text size.