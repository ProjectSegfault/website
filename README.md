# Project Segfault website

Live at [projectsegfau.lt](https://projectsegfau.lt).

## Developing

> You need a lot of infrastructure to run a complete version of the website including: Ghost CMS deployment and Authentik authentication.

### Prerequisites

-   Install [node.js](https://nodejs.org).
-   Install [pnpm](https://pnpm.io/).
-   Learn [Svelte](https://svelte.dev).
-   Add the environment variables from the [environment variables section](#environment-variables).

### Running a dev server.

1. Clone the repository using `git clone https://github.com/ProjectSegfault/website`.
2. Change directory into the clone using `cd ./website`.
3. Install dependencies using `pnpm i`.
4. Run the dev server using `pnpm dev`.
5. Open a browser on `http://localhost:5173/` and you should see the website running locally!

## Running in production

In production you can run the website through Docker Compose or locally. We strongly recommend using Docker since it makes everything 10 times easier.

### Docker

First install Docker and Docker Compose on your system (use Linux if you are sane). After that add the environment variables from the [environment variables section](#environment-variables) and run `docker compose up -d` in the directory of the source code (or just the compose.yml file if you aren't building from source). If you are using Portainer (if you aren't, start using it) you should add a new stack in the Stacks section and select the compose file option, then copy the compose.yml file.

### Locally

If you want to run the website locally in production follow the steps in [developing](#developing) but use `node build` instead of `pnpm dev` and expect the website to be in `http://localhost:3000`.

## Environment variables

The website has the following **mandatory** environment variables

| Name               | Description                                    |
| :----------------- | :--------------------------------------------- |
| AUTH_CLIENT_ID     | Authentik client ID                            |
| AUTH_CLIENT_SECRET | Authentik client secret                        |
| AUTH_ISSUER        | Authentication issuer URL                      |
| AUTH_TRUST_HOST    | Your domain                                    |
| AUTH_SECRET        | Random 32 char secret                          |
| GHOST_URL          | Your Ghost CMS URL                             |
| GHOST_API_KEY      | Your Ghost CMS API key                         |
| KUMA_URL           | Your Uptime Kuma announcements URL             |
| ORIGIN             | Your domain                                    |
| ADDRESS_HEADER     | Header used to retrieve client IP (Caddy only) |
