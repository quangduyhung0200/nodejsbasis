import express, { application } from "express";
import APIController from '../controller/APIController';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUser);
    router.post('/createUser', APIController.createUser)
    router.put('/updateUser', APIController.updateUser)
    router.delete('/deleteUser/:id', APIController.deleteUser)
    return app.use('/api/v1/', router)
}
module.exports = initAPIRoute;