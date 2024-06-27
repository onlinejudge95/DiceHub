package database

import "gorm.io/gorm"

type Profile struct {
	gorm.Model
	Name  string `json:"name" gorm:"unique"`
	Email string `json:"email" gorm:"unique"`
	Image string `json:"image"`
}
