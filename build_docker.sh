#!/bin/sh

docker build -t decred/copay-builder -f Dockerfiles/Dockerfile-builder . \
&& docker run --rm -v `pwd`/dist:/dist decred/copay-builder

