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

## Full recipe

To actually see all the requirements, i've tested on a docker machine running ubuntu 22.04 with nothing installed.
All these steps are not necessary for a typical linux desktop that already comes with git and curl at least.
Also, there are many ways to create the database.

## Access a shell as root

`sudo -s`

### Update package indices

`apt update`

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

# Next command only if database isn't running.
pg_ctlcluster 14 main start

psql

create user flash encrypted password 'flash' createdb;
\q
psql -U flash -h localhost template1
create database flash;
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

### Insert a record to view data

After typeorm has run, the task table is created, so we can insert a task,
and reload the ui to see the data.

```
psql -U flash -h localhost flash
insert into todo (task, done) values ('Download some games for the kid', true);
```
