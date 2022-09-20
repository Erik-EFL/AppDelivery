'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SalesProducts',
    [
      {
        salesId: 1,
        productId: 2,
        quantity: 1,

      },
      {
        salesId: 2,
        productId: 2,
        quantity: 1,

      },
      {
        salesId: 3,
        productId: 2,
        quantity: 1,

      },
      {
        salesId: 4,
        productId: 2,
        quantity: 1,

      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  }
};
