# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## How to run app locally

1. Install [Docker Desktop](https://docs.docker.com/get-docker/) (skip this step if docker is already installed)
2. Run `docker-compose up --build` from **the project root directory** to load Anythink's backend and frontend
3. Check that backend is running by pointing your browser to http://localhost:3000/api/ping
4. Check that frontend is running and it’s connected to the backend by creating a new user on http://localhost:3001/register

## FAQ

1. **I started app with docker compose but unable to pass backend check.**  
    It may take a few minutes to start backend. Try to make check request later
1. `docker-compose` **command not found**  
    It is possible that you are using **compose v2** to which you refer with `docker compose` command. So to run app try: `docker compose up --build`. If it doesn't help, check [docker installation guide](https://docs.docker.com/get-docker/)