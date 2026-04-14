#!/bin/bash
set -e

echo "Deploying to production..."

git checkout main
git merge dev
git push origin main
git checkout dev

echo "Done — Vercel will now build and deploy"
