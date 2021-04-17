CREATE DATABASE habit_db;

CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    email VARCHAR(255)
    activity_id INTEGER,
    FOREIGN KEY (activity_id) REFERENCES activity (id)
);

CREATE TABLE profile(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

CREATE TABLE activity(
    id SERIAL PRIMARY KEY,
    dateOfActivity INTEGER,
    habit_id INTEGER,
    FOREIGN KEY (habit_id) REFERENCES profile (id)
);

CREATE TABLE color(
    id SERIAL PRIMARY KEY,
    value VARCHAR(255),
    label VARCHAR(255),
    color VARCHAR(255),
    bgColor VARCHAR(255),
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

