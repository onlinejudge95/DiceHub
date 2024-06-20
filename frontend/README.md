# DiceHub - frontend

## Pre-Requisites

In order to start development, following services needs to be installed

-   `git`
-   `node`
-   `yarn`

## Development

-   Clone the repo using

```bash
git clone git@github.com:onlinejudge95/DiceHub.git
```

-   Generate a `.env.local` file using `.env.example` file as a template. Reach out to [onlinejudge95](mailto:onlinejudge95@gmail.com) for a working copy of the same

*   Do the changes required
*   Run the development server

```bash
yarn dev
```

-   Once the required changes are ready to be commited make sure your code passes the following checks

```bash
yarn lint
yarn format
yarn build
```

## Deployment

This website is deployed in `vercel` at this link https://dice-hub.vercel.app
