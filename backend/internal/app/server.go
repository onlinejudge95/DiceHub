package app

import (
	"net/http"
	"time"
)

func NewServer(config ServerConfig) *http.Server {
	router := http.NewServeMux()

	router.HandleFunc("GET /health", HealthHandler)

	return &http.Server{
		Addr:         config.BindAddress,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		Handler:      router,
	}
}
