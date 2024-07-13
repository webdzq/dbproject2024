#!/bin/bash
set -o errexit
# chmod ugo+x build.sh 

echo "frontend build start"
cd frontend 
# build

yarn 
yarn  build:online

cp -R ./dist ../backend/

echo "frontend build end"
echo "backend build start"
cd ..
cd backend
python manage.py runserver

echo "backend build end"