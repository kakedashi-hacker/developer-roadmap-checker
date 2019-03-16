package main

import (
	"fmt"
	"net/http"
)

// Handler is okay
func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello Hello")
}
