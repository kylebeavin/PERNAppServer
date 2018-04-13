const express = require('express');
const app = express();
const user = require('./controllers/userController');
const sequelize = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/user', user);
// app.use('api/login', log);

app.listen(3000, () => {
    console.log('App is listening on 3000.');
}); 