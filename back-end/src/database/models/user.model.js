const sequelize = require("sequelize");

const createUser = (sequelize, DataTypes) => {

  const MODEL_NAME = 'user';

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  };

  const options = { tableName: 'users', timestamps: false };

  const Users = sequelize.define(MODEL_NAME, attributes, options);

  Users.associate = (db) => {
    Users.hasMany(db.sale, { as: 'saleUserId', foreignKey: 'userId' });
    Users.hasMany(db.sale, { as: 'saleSellerId', foreignKey: 'sellerId' });
  };

  return Users;
};

module.exports = createUser;
