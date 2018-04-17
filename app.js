require('dotenv').config();

const express = require('express');
const app = express();
const user = require('./controllers/userController');
const sign = require('./controllers/sessController');
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/api/user', user);
app.use(require('./middleware/validate-session'));
// app.use('/api/user', sign);

app.listen(4000, () => {
    console.log('App is listening on 4000.');
}); 