package database

import "gorm.io/gorm"

type DatabaseRepository interface {
	CreateProfile(profile Profile) error
}

type DatabaseRepositorySQLite struct {
	db *gorm.DB
}

func NewDatabaseRepositorySQLite(db *gorm.DB) *DatabaseRepositorySQLite {
	return &DatabaseRepositorySQLite{
		db: db,
	}
}

func (repo *DatabaseRepositorySQLite) CreateProfile(profile Profile) error {
	result := repo.db.Create(&profile)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
