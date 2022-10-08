# Nx react + express plus typeorm, antd and storybook

This is a project created with nx using react + express template.

## Structure

### flash

React application

### api

The express application

### components

Shared react components developed with storybook.

### dao

Typeorm data acces library

## Added value:

- typeorm
- storybook
- antd
- postgresql

## Modus operandi:

Develop react components in a library called components.
Components are developed using storybook. Storybook is configured with a proxy to allow the components to access de /api and be autonomus.
Once ready the components, use them in the main react app flash.
To scale, encapsulate the routes for each table in a route component for each table, in this case users.

## Receta completa

He probado en una máquina docker con ubuntu 22.04 sin nada instalado, para ver realmente las dependencias que
se requieren. Todos estos pasos no son necesarios para una desktop de linux típica que ya trae git y curl al menos.

## Accedemos a un shell como root

`sudo -s`

### Actualizamos índices de paquetes

`apt update`

### Instalamos postgresql, git y curl (-y sin confirmación)

`apt install postgresql git curl -y`

### Instalamos node 16

```
curl -s https://deb.nodesource.com/setup_16.x | bash
apt-get install -y nodejs
```

# Crear usuario y base de datos, config en archivo data-source.ts

```
su - postgres
pg_ctlcluster 14 main start

psql

create user test encrypted password 'test' createdb;
\q
psql -U test -h localhost  template1
create database test;
\q

exit
```

### Dejamos el nivel de root

`exit`

### Clonar el repo

`git clone https://github.com/hanspoo/flash-ws`

### Cambiamos a la carpeta e instalamos las dependencias.

```
cd flash-ws/
npm install
```

### Ejecutamos los tests

`npm run test`

### Instalamos nx

`npm i -g nx`

### Levantamos app react

`nx serve flash`

### Levantamos app express

`nx serve api`
