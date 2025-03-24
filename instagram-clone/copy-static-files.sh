#!/bin/bash

# Create directories
mkdir -p out/feed
mkdir -p out/profile

# Copy static HTML files
cp src/app/feed/static.html out/feed/index.html
cp src/app/profile/static.html out/profile/index.html

echo "Static files copied successfully!"
