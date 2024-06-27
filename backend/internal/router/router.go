package router

import (
	"net/http"
	"time"

	"github.com/onlinejudge95/Dicehub/backend/internal/config"
	"github.com/onlinejudge95/Dicehub/backend/internal/handler"
	"github.com/onlinejudge95/Dicehub/backend/internal/middleware"
)

func NewHTTPRouter(conf config.ServerConfig) *http.Server {
	router := http.NewServeMux()

	router.HandleFunc("POST /api/profile", middleware.EnableCors(handler.CreateProfile))

	return &http.Server{
		Addr:         conf.BindAddress,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		Handler:      router,
	}
}
