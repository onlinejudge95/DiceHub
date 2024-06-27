package config

import (
	"context"

	"github.com/sethvargo/go-envconfig"
)

type ServerConfig struct {
	Environment        string `env:"GO_ENV, required"`
	BindAddress        string `env:"GO_BIND_ADDRESS, required"`
	TLSCertificatePath string `env:"GO_TLS_CERTIFICATE_PATH, required"`
	TLSKeyPath         string `env:"GO_TLS_KEY_PATH, required"`
	SQLitePath         string `env:"GO_SQLITE_PATH, required"`
}

func NewServerConfig(c context.Context) (ServerConfig, error) {
	var config ServerConfig
	err := envconfig.Process(c, &config)
	return config, err
}
