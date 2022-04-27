const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { getAllTasks, createTask } = require('../controllers/task.controller');
const { validateFields } = require('../middlewares/validateFields');

router
    .get('/', getAllTasks)
    .post('/', [
        check('description', 'La description es obligatoria').not().isEmpty(),
        validateFields
    ], createTask);

module.exports = router;