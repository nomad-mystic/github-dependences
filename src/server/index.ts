// Core modules
import http, {IncomingMessage, Server} from 'http';
import path from 'path';
import {fileURLToPath} from "url";

// Community Modules
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';

// Routes
import KeyRoutes from './routes/key-routes.js';


const rootApp = async (): Promise<void> => {
    try {
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
        app.use(express.static(path.join(dirname, '../app')));

        // const router = express.Router();

        app.use('/key', new KeyRoutes().router);

        // router.get('/testing', (req: Request, res: Response) => {
        //     res.send('Get testing page');
        // });
        //
        // app.use('/calendar', router)

        app.listen(app.get('PORT'), () => {
            console.log('Express server listening on port ' + app.get('PORT'));
        });

    } catch (err: any) {
        console.log('rootApp()');
        console.log(err);
    }
};

await rootApp();

export default rootApp;
