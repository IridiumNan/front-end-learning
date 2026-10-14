package main

import (
	"fmt"
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Optional: Set a max memory limit for multipart forms (default is 32 MiB)
	r.MaxMultipartMemory = 8 << 20 // 8 MB

	r.POST("/upload", func(c *gin.Context) {
		// Parse the multipart form (handles multiple files)
		form, err := c.MultipartForm()
		if err != nil {
			c.String(http.StatusBadRequest, fmt.Sprintf("Bad request: %s", err.Error()))
			return
		}

		// "file" matches name="file" from your HTML input
		files := form.File["file"]

		if len(files) == 0 {
			c.String(http.StatusBadRequest, "No files uploaded")
			return
		}

		// Loop through each uploaded file
		for _, file := range files {
			// Secure the filename to avoid directory traversal attacks
			filename := filepath.Base(file.Filename)

			// Destination path (ensure the "uploads" folder exists in your project directory)
			dst := filepath.Join("./uploads", filename)

			// Save the file
			if err := c.SaveUploadedFile(file, dst); err != nil {
				c.String(http.StatusInternalServerError, fmt.Sprintf("Failed to save file %s: %s", filename, err.Error()))
				return
			}
		}

		c.String(http.StatusOK, fmt.Sprintf("Successfully uploaded %d file(s).", len(files)))
	})

	// Run on port 8082 to match your HTML action URL: http://localhost:8082/upload
	r.Run(":8082")
}
