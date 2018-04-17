module.exports = (sequelize, DataTypes) => {
    return sequelize.define('signin', {
        email: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
}