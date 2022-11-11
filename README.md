# movie-theater-api
Movie Theater Project for Express Week Day 5

### Endpoints

`GET /users/` - Get all the users

`GET /users/:userId` - Get a specific user

`GET /users/:userId/watched` - Get shows watched by user

`PUT /users/:userId/watched/:showId` - Mark show as watched

`GET /shows/` - Get all shows

`GET /shows/:showId` - Get specific show

`GET /shows/genres/:genre` - Get all shows by genre

`PUT /shows/:showId/rating/:rating` - Set show rating

`PUT /shows/:showId/status/:status` - Set show status

`DELETE /shows/:showId` - Delete show


### Usage

`npm i` - Install dependencies

`npm run seed` - Seed database

`npm run start` - Run server
