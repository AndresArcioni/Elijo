const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');   
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const hasAccess = require('../middlewares/hasAccess');

const userController = require('../controllers/userController.js');

let storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: function(req, file, cb){
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname));
    }
});
let upload = multer({storage:storage});

router.get('/account/:userID', hasAccess, userController.account);
router.post('/account/:userID', hasAccess, upload.any() ,userController.edit);

//SHOW REGISTER FORM:
router.get('/register', userController.register);
//SAVE USER
router.post('/register', registerValidation, userController.save);

//SHOW LOGIN FORM
router.get('/login', userController.login);
//ENTER ACCOUNT
router.post('/login', loginValidation, userController.enter);

//
router.get('/requestInstitution', hasAccess, userController.requestInstitution);
router.post('/requestInstitution', hasAccess, userController.sendRequest);

//LOGOUT
router.get('/logout', hasAccess, userController.logout);

module.exports = router;