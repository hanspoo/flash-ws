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

## TODO

I've not covered tests here.
