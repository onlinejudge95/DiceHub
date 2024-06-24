package main

import (
	"context"
	"log/slog"
	"net/http"
	"os"

	"github.com/onlinejudge95/Dicehub/backend/internal/app"
)

func main() {
	serverConfig, err := app.NewServerConfig(context.TODO())
	if err != nil {
		slog.Error(err.Error())
		os.Exit(1)
	}

	server := app.NewServer(serverConfig)
	err = server.ListenAndServe()
	if err != nil && err != http.ErrServerClosed {
		slog.Error(err.Error())
		os.Exit(1)
	}
}
