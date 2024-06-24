package app

import (
	"context"

	"github.com/sethvargo/go-envconfig"
)

type ServerConfig struct {
	Environment string `env:"GO_ENV, required"`
	BindAddress string `env:"GO_BIND_ADDRESS, required"`
}

func NewServerConfig(c context.Context) (ServerConfig, error) {
	var config ServerConfig
	err := envconfig.Process(c, &config)
	return config, err
}
