import path from 'path';
import { fileURLToPath } from "url";
import express from 'express';
import morgan from 'morgan';
import KeyRoutes from './routes/key-routes.js';
import ReposRoutes from './routes/repos-routes.js';
const rootApp = async () => {
    try {
        const app = express();
        app.set('PORT', 9000);
        app.use(morgan('dev'));
        app.use(express.json());
        const filename = fileURLToPath(import.meta.url);
        const dirname = path.dirname(filename);
        app.get('/', (req, res) => {
            res.sendFile(path.join(dirname, '../index.html'));
        });
        app.use(express.static(path.join(dirname, '../app')));
        app.use('/key', new KeyRoutes().router);
        app.use('/repos', new ReposRoutes().router);
        app.listen(app.get('PORT'), () => {
            console.log('Express server listening on port ' + app.get('PORT'));
        });
    }
    catch (err) {
        console.log('rootApp()');
        console.log(err);
    }
};
await rootApp();
export default rootApp;
