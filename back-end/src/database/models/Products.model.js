const sequelize = require("sequelize");

const createProduct = (sequelize, DataTypes) => {

  const MODEL_NAME = 'Product';

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING,
  };

  const options = { tableName: 'Products', underscored: true, timestamps: false };

  const Product = sequelize.define(MODEL_NAME, attributes, options);

  return Product;
};

module.exports = createProduct;
