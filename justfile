set dotenv-load := false

install:
    npm install

dev:
    npm run dev

lint:
    npm run lint

build:
    npm run build

check:
    npm run lint
    npm run build

nix-check:
    nix flake check
