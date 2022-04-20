const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/user', require('./routes/user.route'));

app.listen(3000);