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

## full recipe

I've tested on a docker machine running ubuntu 22.04 with nothing installed, to actually see the dependencies that
are required. All these steps are not necessary for a typical linux desktop that already comes with git and curl at least.

## Access a shell as root

`sudo -s`

### Update package indices

`aptupdate`

### We install postgresql, git and curl (-y without confirmation)

`apt install postgresql git curl -y`

### Install node 16

```
curl -s https://deb.nodesource.com/setup_16.x | bash
apt-get install -y nodejs
```

### Create user and database (config is in file libs/dao/src/lib/data-source.ts)

```
su - postgres
pg_ctlcluster 14 main start

psql

create user test encrypted password 'test' createdb;
\q
psql -U test -h localhost template1
create database test;
\q

exit
```

### Leave the root level

`exit`

### Clone the repo

`git clone https://github.com/hanspoo/flash-ws`

### Change to the folder and install the dependencies.

```
cd flash-ws/
npm install
```

### Run the tests

`npm run test`

### Install nx

`npm i -g nx`

### We raise app react

`nx serve flash`

### We build app express

`nx serve api`
