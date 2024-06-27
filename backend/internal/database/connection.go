package database

import (
	"github.com/onlinejudge95/Dicehub/backend/internal/config"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var Repo *DatabaseRepositorySQLite

func InitDBConnection(conf config.ServerConfig) error {
	db, err := gorm.Open(sqlite.Open(conf.SQLitePath), &gorm.Config{})
	if err != nil {
		return err
	}

	err = db.AutoMigrate(&Profile{})
	if err != nil {
		return err
	}

	Repo = NewDatabaseRepositorySQLite(db)

	return nil
}
