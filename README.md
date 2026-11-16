# Website Mint System GmbH

Hugo website with a Tailwind CSS build.

## Usage

Clone the repository:

```bash
git clone git@github.com:Mint-System/Website.git
cd Website
```

Install the [Taskfile](https://taskfile.build) and its Hugo commands:

```bash
git clone https://git.taskfile.build "$HOME/taskfile.build"
```

Install Hugo and the Node dependencies:

```bash
task install-hugo
pnpm install
```

Prepare the site (build the Tailwind CSS assets):

```bash
task prepare-hugo-site
```

Start the Hugo development server:

```bash
task dev-hugo-site
```

Build and serve the site:

```bash
task build-hugo-site
task serve-hugo-site
```

Create a new blog post:

```bash
task new-post "Post Title"
```

Show all available commands:

```bash
task
```
