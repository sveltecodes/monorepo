# svelte.codes monorepo

```bash
git clone --recurse-submodules git@github.com:sveltecodes/monorepo.git
cd monorepo
git submodule foreach "git checkout main"
pnpm install
```

| Target                         | Description                              |
| ------------------------------ | ---------------------------------------- |
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
