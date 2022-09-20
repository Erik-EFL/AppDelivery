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
    userId: Sequelize.INTEGER,
    sellerId: Sequelize.INTEGER,
    totalPrice: Sequelize.DECIMAL(9, 2),
    deliveryAddress: Sequelize.STRING,
    deliveryNUmber: Sequelize.STRING,
    salesDate: Sequelize.DATE,
    status: Sequelize.STRING,
  });

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('sales');
  }
};
