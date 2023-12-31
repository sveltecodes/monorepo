# svelte.codes monorepo

```bash
git clone --recurse-submodules git@github.com:sveltecodes/monorepo.git
cd monorepo
git submodule foreach "git checkout main"
pnpm install
```

| Target                         | Description                              |
|--------------------------------|------------------------------------------|
| pnpm modal-manager:release     | Patch, build, and publish a new version. |
| pnpm modal-manager:build       | Build.                                   |
| pnpm modal-manager:build:watch | Build and watch for changes.             |

## Modal Manager

### Development

```bash
cd packages/modal-manager
pnpm build:watch
```

Update modules:

```bash
git pull
git submodule foreach "git checkout main && git pull"
```

### Shipping Changes

Commit + push all repos:

| Command                           | Description                                |
|-----------------------------------|--------------------------------------------|
| make update                       | `git pull` in all repos.                   |
| make commit MESSAGE="Fixed x,y,z" | Commit + push all repos.                   |
| make install                      | `npm install` in all repos.                |
| make checkout BRANCH=main         | `git checkout main` a branch in all repos. |
