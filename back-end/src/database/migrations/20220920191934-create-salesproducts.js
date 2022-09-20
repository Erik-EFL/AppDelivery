'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('salesProducts',
  {
    saleId:{
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
        model: 'Sales',
        key: 'id'
       }
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
       model: 'Products',
       key: 'id'
      }
    },
    quantity: Sequelize.INTEGER,
  });

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('salesProducts');
  }
};
