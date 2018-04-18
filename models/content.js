module.exports = (sequelize, DataTypes) => {
    return sequelize.define('content', {
        subject: DataTypes.STRING,
        notes: DataTypes.STRING,
        reference: DataTypes.STRING
    })
}