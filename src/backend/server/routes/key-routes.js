import express from 'express';
/**
 * @classdesc
 * @class
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class KeyRoutes {
    constructor() {
        /**
         * @description
         * @public
         * @author Keith Murphy | nomadmystics@gmail.com
         *
         * @return {void}
         */
        this.getKey = () => {
            try {
                this.router.get('/get', (req, res) => {
                    res.send('Get key page');
                });
            }
            catch (err) {
                console.error(err);
            }
        };
        /**
         * @description
         * @public
         * @author Keith Murphy | nomadmystics@gmail.com
         *
         * @return {void}
         */
        this.createKey = () => {
            try {
                this.router.post('/create', (req, res) => {
                    res.send('Create key page');
                });
            }
            catch (err) {
                console.error(err);
            }
        };
        /**
         * @description
         * @public
         * @author Keith Murphy | nomadmystics@gmail.com
         *
         * @return {void}
         */
        this.deleteKey = () => {
            try {
                this.router.delete('/remove', (req, res) => {
                    res.send('Remove key page');
                });
            }
            catch (err) {
                console.error(err);
            }
        };
        this.router = express.Router();
        this.getKey();
        this.createKey();
        this.deleteKey();
    }
}
