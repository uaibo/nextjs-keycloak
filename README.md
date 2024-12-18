## Install
`yarn install` or `npm run install`

## Setup keycloak
You can run the keycloak server using the `keycloak-docker` config provided in this repository.
- `cd keycloak-docker`
- `cp .env.example .env`
- `docker compose up -d`
- go to `http://localhost:8080` and login with u:`admin` p:`password`
- create a new realm
- create new client in that realm, with the following options: [screenshot1](https://github.com/uaibo/nextjs-keycloak/blob/master/public/kc1.png), [screenshot2](https://github.com/uaibo/nextjs-keycloak/blob/master/public/kc2.png). **Very important:** make sure to add a `+` in "Web origins" field.
- create a user
- [done]


## Setup Nextjs app
- `cp .env.example .env`
- setup env variables
- `yarn dev`
- [done] 
