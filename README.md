# svelte.rocks monorepo

```bash
git clone --recurse-submodules git@github.com:sveltecodes/monorepo.git
cd monorepo
git submodule foreach "git checkout main"
pnpm install
```

## Modal Manager

### Development

```bash
cd packages/modal-manager
pnpm build:watch
```
