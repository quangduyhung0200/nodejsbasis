import express from "express";
import homeController from '../controller/homecontroller';
import { Route } from "express";
let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.post('/create', homeController.createNewUser)
    router.get('/detail/user/:userId', homeController.getDetailpage)
    router.get('/about', (req, res) => {
        res.send(`i'm hung`);

    })
    return app.use('/', router)
}
module.exports = initWebRoute;