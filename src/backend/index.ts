// Core modules
import http, {IncomingMessage, Server} from 'http';
import path from 'path';
import {fileURLToPath} from "url";

// Community Modules
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';

// Routes
import KeyRoutes from './routes/key-routes.js';
import ReposRoutes from './routes/repos-routes.js';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 * @link https://stackoverflow.com/questions/72269530/typescript-class-with-express-mounted-route
 *
 * @return
 */
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
        // @ts-ignore
        const filename: string = fileURLToPath(import.meta.url);
        const dirname: string = path.dirname(filename);

        // @todo Extract this into methods
        app.get('/', (req: Request, res: Response) => {
            res.sendFile(path.join(dirname, 'public'));
        });

        // Static Assets
        app.use(express.static(path.join(dirname, '../app')));

        app.use('/key', new KeyRoutes().router);
        app.use('/repos', new ReposRoutes().router);

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
