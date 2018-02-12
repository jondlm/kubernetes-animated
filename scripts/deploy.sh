#!/bin/bash
set -e # exit with nonzero exit code if anything fails

yarn build
cd build
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet git@github.com:jondlm/react-keyframer.git master:gh-pages
