'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('sales',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      field: 'user_id',
      allowNull: false
    },
    sellerId: {
      type: Sequelize.INTEGER,
      field: 'seller_id',
      allowNull: false
    },
    totalPrice: {
      type: Sequelize.DECIMAL(9, 2),
      field: 'total_price',
      allowNull: false
    },
    deliveryAddress:{
      type: Sequelize.STRING,
      field: 'delivery_address',
      allowNull: false
    },
    deliveryNUmber: {
      type: Sequelize.STRING,
      field: 'delivery_number',
      allowNull: false
    },
    salesDate: {
      type: Sequelize.DATE,
      field: 'sale_date',
      allowNull: false
    },
    status: Sequelize.STRING,
  });

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('sales');
  }
};
