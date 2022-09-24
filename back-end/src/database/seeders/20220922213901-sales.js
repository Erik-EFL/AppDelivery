'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 1,
        seller_id: 2,
        total_price: 20,
        delivery_address: 'any-address',
        delivery_Number: 21,
        sale_date: new Date('2011-08-01T19:58:51.000Z'),
        status: 'entregue',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 20,
        delivery_address: 'any-address',
        delivery_Number: 200,
        sale_date: new Date('2011-08-01T19:58:51.000Z'),
        status: 'entregue',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
