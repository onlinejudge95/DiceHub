package handler

import (
	"encoding/json"
	"log/slog"
	"net/http"
	"strings"

	"github.com/onlinejudge95/Dicehub/backend/internal/database"
)

func CreateProfile(w http.ResponseWriter, r *http.Request) {
	// Check if content type is JSON
	contentType := r.Header.Get("Content-Type")
	if contentType != "application/json" {
		http.Error(w, "Server only accepts JSON", http.StatusUnsupportedMediaType)
		return
	}

	// Check if the JSON is correct
	var payload database.Profile
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		slog.Error(err.Error())
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// Add user to the db
	err = database.Repo.CreateProfile(payload)
	if err != nil {
		if strings.Contains(err.Error(), "UNIQUE constraint failed") {
			http.Error(w, "Profile with given detail already exists", http.StatusBadRequest)
		} else {
			http.Error(w, "Error creating user profile", http.StatusInternalServerError)
		}
		return
	}

	// Prepare the response object
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(payload)
}
