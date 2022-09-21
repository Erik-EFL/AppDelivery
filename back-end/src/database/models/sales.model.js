const sequelize = require("sequelize");

const createSale = (sequelize, DataTypes) => {

  const MODEL_NAME = 'sale';

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    salesDate: DataTypes.DATE,
    status: DataTypes.STRING,
  };

  const options =   {
    tableName: 'sales',
    underscored: true,
    timestamps: false,
  };

  const Sales = sequelize.define(MODEL_NAME, attributes, options);

  return Sales;
};

module.exports = createSale;
