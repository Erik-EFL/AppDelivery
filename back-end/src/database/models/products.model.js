const sequelize = require("sequelize");

const createProduct = (sequelize, DataTypes) => {

  const MODEL_NAME = 'product';

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  };

  const options =
    {
      tableName: 'products',
      underscored: true,
      timestamps: false
    };

  const Products = sequelize.define(MODEL_NAME, attributes, options);

  return Products;
};

module.exports = createProduct;
