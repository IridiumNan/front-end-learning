#!/usr/bin/env bash

echo "using python file server on backgroud, you can run   jobs    to manage it"
python -m http.server 8080 &>/dev/null &
