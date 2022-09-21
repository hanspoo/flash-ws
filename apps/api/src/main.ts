import * as express from 'express';
import { Message } from '@flash-ws/api-interfaces';
import { app } from './app';

const greeting: Message = { message: 'Welcome to api!' };

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
