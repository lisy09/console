#!/bin/bash

set -x

yarn
yarn build
yarn test


docker buildx build --file Dockerfile --tag lisy09kubesphere/ks-console:v3.0.0 --platform linux/amd64,linux/arm/v7,linux/arm64/v8 . --push