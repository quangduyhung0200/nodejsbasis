import express from "express";
import homeController from '../controller/homecontroller';
import multer from "multer";
import path from "path"
var appRoot = require("app-root-path")
let router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + '/src/public/img/');
    },
    filename: function (req, file, cb) {

        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
})
const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });


const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.post('/update-user', homeController.updateUser)
    router.post('/create', homeController.createNewUser)
    router.get('/detail/user/:userId', homeController.getDetailpage)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.editUser)
    router.get('/uploadfile', homeController.getUploadFile)
    router.post('/upload-profile-pic', upload.single('profile-pic'), homeController.handleUploadFile)
    router.get('/about', (req, res) => {
        res.send(`i'm hung`);

    })
    return app.use('/', router)
}
module.exports = initWebRoute;