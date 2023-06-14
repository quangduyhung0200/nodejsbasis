import express from "express";
import homeController from '../controller/homecontroller';
let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userId', homeController.getDetailpage)
    router.get('/about', (req, res) => {
        res.send(`i'm hung`);

    })
    return app.use('/', router)
}
module.exports = initWebRoute;