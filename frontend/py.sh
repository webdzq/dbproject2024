#!/bin/bash
set -o errexit
MOD_NAME="fontend"
TAR="$MOD_NAME.tar.gz"


# cd fontend 
# build

chmod ugo+x test1.sh
yarn 
yarn  build:online

cp -R ./dist ../backend/

echo "build end"