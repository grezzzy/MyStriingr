DROP DATABASE IF EXISTS striingr;
CREATE DATABASE striingr;
\c striingr;

CREATE TABLE IF NOT EXISTS users (
  user_id int GENERATED ALWAYS AS IDENTITY,
  first_name varchar(20) NOT NULL,
  last_name varchar(30) NOT NULL,
  username varchar(20) NOT NULL UNIQUE,
  email varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY(user_id)
);

CREATE TABLE IF NOT EXISTS jobs (
  job_id int GENERATED ALWAYS AS IDENTITY,
  user_id int,
  racket varchar(20) NOT NULL,
  string varchar(20) NOT NULL,
  string_type varchar(20) NOT NULL,
  string_gauge varchar(5) NOT NULL,
  PRIMARY KEY (job_id),
  CONSTRAINT fk_user
    FOREIGN KEY (user_id)
      REFERENCES users(user_id)
      -- ON DELETE CASCADE
);

--CREATE TYPE ratings AS ENUM("1","2","3","4","5");

CREATE TABLE IF NOT EXISTS reviews (
  review_id int GENERATED ALWAYS AS IDENTITY,
  job_id int,
  content text,
  rating int,
  CONSTRAINT fk_job
    FOREIGN KEY (job_id)
      REFERENCES jobs(job_id)
)