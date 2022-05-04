const express = require('express');
const app = express();
const db = require('./database/models');
const { expressjwt: jwt } = require('express-jwt');
const cors = require('cors');

forceSync = async () => {
  await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await db.sequelize.sync({ force: true });
  await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  await db.User.create({
    name: "Mauricio",
    lastName: "Sierra",
    email: "test@test.com",
    password: "12345"
  });
  await db.Task.create({
    description: "Task 1",
    UserId: 1
  });
}

forceSync();

app.use(cors());
app.use(express.json());

app.use(
  jwt({
    secret: "NocqVerXvLvLtyvquEJF",
    algorithms: ["HS256"],
  }).unless({ path: ["/api/user/login", "/api/user/signup"] })
);

app.use('/api/user', require('./routes/user.route'));
app.use('/api/task', require('./routes/task.route'));

app.listen(3001);