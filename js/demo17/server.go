package main

import (
	"fmt"
	"log"
	"log/slog"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	name := r.FormValue("name")

	_, err := fmt.Fprintf(w, "Hello %s, this response comes from server", name)
	if err != nil {
		fmt.Printf("error when respond: %s", err.Error())
	}
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "hello this is root endpoint")
}

func main() {
	endPoint := "/hello"
	address := ":8081"
	router := http.NewServeMux()

	router.HandleFunc("/", rootHandler)
	router.HandleFunc(endPoint, helloHandler)

	slog.Info("starting listenning", "endpoint", endPoint, "address", address)

	err := http.ListenAndServe(address, router)
	if err != nil {
		log.Fatal(err)
	}
}
