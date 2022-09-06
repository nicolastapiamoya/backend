CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCLREMENTS,
    title  VARCHAR(100) NOT NULL,
    descripcion TEXT;
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, descripcion) VALUES
    ('task 1', 'somedescrption')
    ('task 2', 'somedescrption 2');
