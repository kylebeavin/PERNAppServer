const Sequelize = require('sequelize');

const sequelize = new Sequelize('PERNAPP','postgres','killab513', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    () => {
        console.log('You are connected to your database');
    },
    err => console.log(err)
);

module.exports = sequelize;