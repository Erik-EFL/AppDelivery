'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('sales_products',
  {
    saleId:{
       type: Sequelize.INTEGER,
       field: 'sale_id',
       allowNull: false,
       primaryKey: true,
       references: {
        model: 'sales',
        key: 'id'
       },
       onDelete: 'CASCADE',
       onUpdate: 'CASCADE'
    },
    productId: {
      type: Sequelize.INTEGER,
      field: 'product_id',
      allowNull: false,
      primaryKey: true,
      references: {
       model: 'products',
       key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    quantity: Sequelize.INTEGER,
  });

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('sales_products');
  }
};
