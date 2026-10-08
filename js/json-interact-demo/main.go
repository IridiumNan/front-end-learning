package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"log/slog"
	"net/http"
)

type Response struct {
	Code int `json:"code"`

	Status string `json:"status"`

	Data any `json:"data"`
}

func doRespond(code int, status string, data any, w io.Writer) error {
	resp := Response{
		Code:   code,
		Status: status,
		Data:   data,
	}

	respByte, err := json.Marshal(resp)
	if err != nil {
		return fmt.Errorf("error while marshal struct to byte json data, err: %s", err.Error())
	}

	n, err := w.Write(respByte)
	if err != nil {
		return fmt.Errorf("error while byte data to writer, err: %s", err.Error())
	}

	slog.Info("write byte data success", "byte_size", n)

	return nil
}

type UserData struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func handleHello(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	byteData, err := io.ReadAll(r.Body)
	if err != nil {
		slog.Error("error while reading from request body", "err", err)
		if err := doRespond(http.StatusBadRequest, "empty request body", nil, w); err != nil {
			slog.Error("error while responding", "err", err)
		}
		return
	}

	userData := UserData{}
	err = json.Unmarshal(byteData, &userData)
	if err != nil {

		slog.Error("error while unmarshal body data from client", "err", err, "raw_json", string(byteData))

		err = doRespond(http.StatusBadRequest, "fail to parse user information", nil, w)
		if err != nil {
			slog.Error("error while responding", "err", err)
		}
		return
	}

	data := fmt.Sprintf("Hello %s, your age is %d", userData.Name, userData.Age)

	err = doRespond(http.StatusOK, "parse user data success", data, w)
	if err != nil {
		slog.Error("error while respond data ", "err", err)
		return
	}
}

func main() {
	router := http.NewServeMux()

	router.HandleFunc("/hello", handleHello)

	slog.Info("starting serve on :8081")
	err := http.ListenAndServe(":8081", router)
	if err != nil {
		log.Fatal(err)
	}
}
