CREATE DATABASE users_test_jose_manuel_acosta_segovia;

USE users_test_jose_manuel_acosta_segovia;

CREATE TABLE users_test_jose_manuel_acosta_segovia(
    id INT() NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    segundo_nombre VARCHAR(255),
    apellido_paterno VARCHAR(255) NOT NULL,
    apellido_materno VARCHAR(255),
    fecha_nacimiento VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(10),
);