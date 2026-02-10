
# novax-component-registry

This repository is a minimal custom registry for the `shadcn` CLI.

## Files

- `registry.json` is the registry index (required by the docs). It references your source files by path.
- `registry/` contains the source-authored files (normal `.tsx`, etc.). This is what you edit.
- `public/r/` contains the published registry item payloads (`{name}.json`). These are what consumers install.

`public/r/*.json` must include `files[].content` (embedded) per the official `registry-item.json` schema. You should generate these files; don’t hand-edit them.

## GitHub raw hosting

If you’re hosting directly from GitHub, you can use `raw.githubusercontent.com` URLs.

- Registry index URL:
	- `https://raw.githubusercontent.com/<OWNER>/<REPO>/<REF>/registry.json`
- Item URL:
	- `https://raw.githubusercontent.com/<OWNER>/<REPO>/<REF>/public/r/hello.json`

Where `<REF>` can be `main`, a tag (recommended), or a commit SHA (most reproducible).

### Install via URL

- `npx shadcn@latest add https://raw.githubusercontent.com/<OWNER>/<REPO>/<REF>/public/r/hello.json`

### Install via namespace (recommended for multiple items)

Add this to your project’s `components.json`:

- `"registries": { "@novax": "https://raw.githubusercontent.com/<OWNER>/<REPO>/<REF>/public/r/{name}.json" }`

Then install:

- `npx shadcn@latest add @novax/hello`

## Notes

- Registry items should conform to the `registry-item.json` schema.
- Generate `r/*.json` by running: `npm run registry:build` (or `pnpm registry:build`).

## Publishing

For GitHub raw hosting, commit the generated files in `public/r/` to the repo. The raw URLs point directly at files in the repository, so consumers can only install what is committed.

Optional alternative: build `public/r/` in CI and publish via a static host/CDN (or GitHub Pages). In that setup, consumers should point their registry URLs at the deployed host instead of `raw.githubusercontent.com`.

## Source layout (template-style)

This registry uses the same source layout pattern as the official registry template:

- `registry/default/blocks/<name>/<name>.tsx`

