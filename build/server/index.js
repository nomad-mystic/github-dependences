import http from 'http';
import path from 'path';
import { fileURLToPath } from "url";
import express from 'express';
import morgan from 'morgan';
const app = express();
app.set('PORT', 9000);
app.use(morgan('dev'));
app.use(express.json());
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, '../index.html'));
});
console.log(path.join(dirname, '../app'));
app.use(express.static(path.join(dirname, '../app')));
const index = http.createServer(app);
index.listen(app.get('PORT'), () => {
    console.log('Express server listening on port ' + app.get('PORT'));
    console.log(path.join(dirname, '../app'));
});
export default index;
