'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 10,
      },
      {
        sale_id: 2,
        product_id: 4,
        quantity: 30,
      },
      {
        sale_id: 1,
        product_id: 6,
        quantity: 35,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};
