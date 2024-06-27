package main

import (
	"context"
	"log/slog"
	"net/http"
	"os"

	"github.com/onlinejudge95/Dicehub/backend/internal/config"
	"github.com/onlinejudge95/Dicehub/backend/internal/database"
	"github.com/onlinejudge95/Dicehub/backend/internal/router"
)

func main() {
	serverConfig, err := config.NewServerConfig(context.TODO())
	if err != nil {
		slog.Error(err.Error())
		os.Exit(1)
	}
	slog.Info("Server config loaded successfully")

	err = database.InitDBConnection(serverConfig)
	if err != nil {
		slog.Error(err.Error())
		os.Exit(1)
	}
	slog.Info("DB Initialized successfully")

	router := router.NewHTTPRouter(serverConfig)
	slog.Info("Router Initialized successfully")

	err = router.ListenAndServeTLS(serverConfig.TLSCertificatePath, serverConfig.TLSKeyPath)
	if err != nil && err != http.ErrServerClosed {
		slog.Error(err.Error())
		os.Exit(1)
	}
}
