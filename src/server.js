import express from 'express';
import configsViewEngine from './configs/viewengine';
import initWebRoute from './route/web.js';
import initAPIRoute from './route/api';
require('dotenv').config()
const app = express()
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configsViewEngine(app);
initWebRoute(app);
initAPIRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})