#!/bin/bash
# Pakai: ./bump-version.sh        -> otomatis pakai tanggal hari ini (YYYYMMDDHHMM)
#        ./bump-version.sh 20261101
V="${1:-$(date +%Y%m%d%H%M)}"
find . -name "*.html" -not -path "./node_modules/*" -exec sed -i -E "s/\?v=[0-9A-Za-z._-]+/?v=$V/g" {} +
echo "Versi aset diganti jadi ?v=$V"
