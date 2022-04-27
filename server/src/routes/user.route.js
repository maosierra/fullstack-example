const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const { check } = require("express-validator");
const { emailExist } = require('../middlewares/emailExist');
const { validateFields } = require('../middlewares/validateFields');

router
    .get('/', userCtrl.getAllUsers)
    .put('/', userCtrl.updateUser)
    .delete('/', userCtrl.deleteUser);

router.post('/signup', [
    check('name', 'El campo nombre no puede estar vacio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('password', 'El password no puede estar vacio').not().isEmpty(),
    check('password', 'El password debe ser mayor a 3 caracteres').isLength({ min: 3 }),
    check('email').custom(emailExist),
    validateFields
], userCtrl.createUser);

router.post('/login', [
    check('email', 'El email no es valido').isEmail(),
    check('password', 'El password no puede estar vacio').not().isEmpty(),
    validateFields
], userCtrl.login);

module.exports = router;