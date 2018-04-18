module.exports = (sequelize, DataTypes) => {
    return sequelize.define('content', {
        subject: DataType.STRING,
        notes: DataTypes.STRING,
        reference: DataTypes.STRING
    })
}