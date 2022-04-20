const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const middleware1 = require('../middlewares/middleware1');

router.get('/', [middleware1], userCtrl.getAllUsers)
    .post('/', userCtrl.createUser)
    .put('/', userCtrl.updateUser)
    .delete('/', userCtrl.deleteUser);

router.post('/login', userCtrl.login);

module.exports = router;