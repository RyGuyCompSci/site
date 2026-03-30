ARG VARIANT=22
ARG USERNAME=node
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}-bullseye AS setup
ENV RUNNING_IN_DOCKER=true

RUN apt-get update && apt-get -y install --no-install-recommends \
    jq \
    openssl

USER $USERNAME