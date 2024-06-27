# DiceHub - backend

![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)

## Pre-Requisites

In order to start development, following services needs to be installed

- `git`
- `go`

We need to create self signed certificates for running the code in development environment i.e local machine.

```bash
cd certificates
openssl req -x509 -newkey rsa:2048 -nodes -keyout server.key -out server.crt -days 365
sudo cp certificates/server.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

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
