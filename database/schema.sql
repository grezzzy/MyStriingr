DROP DATABASE IF EXISTS striingr;
CREATE DATABASE striingr;
\c striingr;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username varchar(20),
  email varchar(50)
)