const sequelize = require("sequelize");

const createUser = (sequelize, DataTypes) => {

  const MODEL_NAME = 'User';

  const attributes = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  };

  const options = { tableName: 'Users', timestamps: false };

  const Users = sequelize.define(MODEL_NAME, attributes, options);

  Users.associate = (db) => {
    Users.hasMany(db.Sales, { as: 'Sales', foreignKey: 'userId' });
    Users.hasMany(db.Sales, { as: 'Sales', foreignKey: 'sellerId' });
  };

  return Users;
};

module.exports = createUser;
