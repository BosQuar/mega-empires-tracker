# Mega empire tracker

A mega/wester/eastern empire tracker. Currently a work in progress, but goal is to have a tracker that speeds up the process when i.e. buying civilization advances and view turn history for fun!

Repo is powered by:

- Sveltekit
- Tailwind
- Prettier/eslint
- mode toggle(dark/light)
- Shadcn-svelte for components and theme(customisable)
- Prisma
- Postgres (docker)
- pgAdmin (via docker)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`),

copy env.example and rename to .env

Setup docker with db

```bash
npm run docker
```

Setup Prisma

```bash
npm run setup-dev
```

Start a development server:

```bash
npm run start
```
