
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "movie" (
	"id" INT NOT NULL UNIQUE PRIMARY KEY ,
	"title" VARCHAR(300) NOT NULL,
	"overview" VARCHAR(2000) NOT NULL,
	"release_date" VARCHAR(12) NOT NULL,
	"poster_path" VARCHAR(60) NOT NULL
);

CREATE TABLE "user_movie" (
	"user_id" INT REFERENCES "user",
	"movie_id" INT
);


