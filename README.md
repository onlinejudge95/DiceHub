# DiceHub - frontend

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)
![Neovim](https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Pre-Requisites

In order to start development, following services needs to be installed

- `git`
- `node`
- `yarn`

## Development

- Clone the repo using

```bash
git clone git@github.com:onlinejudge95/DiceHub.git
```

- Make sure you have installed all the dependencies

```bash
yarn install
```

- Generate a `.env.local` file using `.env.example` file as a template. Reach out to [onlinejudge95](mailto:onlinejudge95@gmail.com) for a working copy of the same

- Do the changes required

- Run the development server

```bash
yarn dev
```

- Once the required changes are ready to be commited make sure your code passes the following checks

```bash
yarn lint
yarn format
yarn build
```

- If your changes include adding an env variable then you need to run the following command so that the env variable is available for the preview deployment along with production

```bash
vercel env add
```

## Deployment

This website is deployed in `vercel` at this link https://dice-hub.vercel.app
