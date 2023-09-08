// Core modules
import http, {IncomingMessage, Server } from 'http';
import path from 'path';
import { fileURLToPath } from "url";

// Community Modules
import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';

// Build our app
const app: Express = express();

// Set ENV
app.set('PORT', 9000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// @todo make this a method
const filename: string = fileURLToPath(import.meta.url);
const dirname: string = path.dirname(filename);

// @todo Extract this into methods
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(dirname, '../index.html'));
});

// Static Assets
app.use(express.static(path.join(dirname, '../front-end')));

// app.get('/', routes.index)
// app.get('/users', user.list)

// Create the server
const server: http.Server = http.createServer(app);

server.listen(app.get('PORT'), () =>{
    console.log('Express server listening on port ' + app.get('PORT'));
    console.log(path.join(dirname, '../front-end'));
});

export default server;
