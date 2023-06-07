import express from 'express';
import configsViewEngine from './configs/viewengine';
import initWebRoute from './route/web.js';

require('dotenv').config()
const app = express()
const port = process.env.PORT;

configsViewEngine(app);
initWebRoute(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})