// Core modules
import http, {IncomingMessage, Server } from 'http';

// Community Modules
import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';

// Build our app
const app: Express = express();

// app.use(express.json);

// Set ENV
app.set('PORT', 3000);

// Middleware
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
    res.send('Testings');
});

// app.get('/', routes.index)
// app.get('/users', user.list)

const server: http.Server = http.createServer(app);

server.listen(app.get('PORT'), () =>{
    console.log('Express server listening on port ' + app.get('PORT'));
});
