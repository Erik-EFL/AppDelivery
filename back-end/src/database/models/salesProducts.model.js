const sequelize = require("sequelize");

const createSalesProduct = (sequelize, DataTypes) => {

  const MODEL_NAME = 'salesProducts';

  const attributes = {
    saleId:  {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    productId:  {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    quantity: DataTypes.INTEGER,
  };

  const options =
    {
      tableName: 'sales_products',
      underscored: true,
      timestamps: false
    };

  const SalesProduct = sequelize.define(MODEL_NAME, attributes, options);

  SalesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SalesProduct;
};

module.exports = createSalesProduct;
