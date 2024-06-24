# DiceHub - backend

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/onlinejudge95/DiceHub/ci-backend.yml?style=flat-square&logo=githubactions&logoSize=amg&label=CI%20-%20Backend)

![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)

## Pre-Requisites

In order to start development, following services needs to be installed

- `git`
- `go`

## Development

- Clone the repo using

```bash
git clone git@github.com:onlinejudge95/DiceHub.git
```

- Change to `backend` directory

```bash
cd backend
```

- Make sure you have installed all the dependencies

```bash
go mod tidy
```

- Generate a `.env` file using `.env.example` file as a template. Reach out to [onlinejudge95](mailto:onlinejudge95@gmail.com) for a working copy of the same

- Do the changes required

- Run the development server

```bash
go run cmd/main.go
```

- Once the required changes are ready to be commited make sure your code passes the following checks

```bash
go fmt ./...
go build -race -o bin/backend cmd/main.go
```
