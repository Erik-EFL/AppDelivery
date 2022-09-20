const sequelize = require("sequelize");

const createSalesProduct = (sequelize, DataTypes) => {

  const MODEL_NAME = 'SalesProduct';

  const attributes = {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  };

  const options = { tableName: 'SalesProducts', underscored: true, timestamps: false };

  const SalesProduct = sequelize.define(MODEL_NAME, attributes, options);

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SalesProduct;
};

module.exports = createSalesProduct;
