const { User } = require('../database/models');

const userCtrl = {}

userCtrl.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email
        }
    });
    if (await user.validPassword(password)) {
        return res.json('Usuario login ok');
    } else {
        return res.json('Usuario/Password invalid');
    }
}

userCtrl.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const { name, lastName, email, password } = req.body;
    const user = await User.create({ name, lastName, email, password });

    res.json(user);
}

userCtrl.updateUser = (req, res) => {
    res.json('Put to user endpoing');
}

userCtrl.deleteUser = (req, res) => {
    res.json('Delete to user endpoing');
}

module.exports = userCtrl;