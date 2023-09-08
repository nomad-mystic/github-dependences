import express from 'express';
export default class KeyRoutes {
    router;
    constructor() {
        this.router = express.Router();
        this.getKey();
        this.createKey();
        this.deleteKey();
    }
    getKey = () => {
        try {
            this.router.get('/get', (req, res) => {
                res.send('Get key page');
            });
        }
        catch (err) {
            console.error(err);
        }
    };
    createKey = () => {
        try {
            this.router.post('/create', (req, res) => {
                res.send('Create key page');
            });
        }
        catch (err) {
            console.error(err);
        }
    };
    deleteKey = () => {
        try {
            this.router.delete('/remove', (req, res) => {
                res.send('Remove key page');
            });
        }
        catch (err) {
            console.error(err);
        }
    };
}
