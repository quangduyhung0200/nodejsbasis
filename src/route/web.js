import express from "express";
import homeController from '../controller/homecontroller';
import { Router } from "express";
let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.post('/update-user', homeController.updateUser)
    router.post('/create', homeController.createNewUser)
    router.get('/detail/user/:userId', homeController.getDetailpage)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.editUser)

    router.get('/about', (req, res) => {
        res.send(`i'm hung`);

    })
    return app.use('/', router)
}
module.exports = initWebRoute;