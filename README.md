# Website Mint System

Open repo in Obsidian. Use these links to navigate the repo:

* [Icons](static/assets/icons/README.md)

## Requirements

* node 20+
* hugo

## Usage

Clone the repo.

```bash
git clone git@github.com:Mint-System/Website.git
```

Install the vercel cli and login.

```bash
npm i -g vercel
```
### Build

Build the website.

```bash
hugo --gc
# or
vercel build
```

Serve from publish directory.

```bash
npx -y serve public
```

### Develop

Install hugo and run local server.

```bash
hugo server --baseURL http://localhost:1313`
# or
vercel dev
```
