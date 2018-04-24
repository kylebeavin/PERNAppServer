const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    port: 5432,
    dialect: 'postgres'
});

sequelize.authenticate().then(
    () => {
        console.log('You are connected to your database');
    },
    err => console.log(err)
);

module.exports = sequelize;