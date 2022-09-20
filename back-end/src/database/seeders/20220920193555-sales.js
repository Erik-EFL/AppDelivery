'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sales',
    [
      {
        id: 1,
        userId: 200,
        sellerId: 5,
        totalPrice: 165.80 ,
        deliveryAddress: 'Avenida Afonso Pena, Boa Viagem, Belo Horizonte, MG',
        deliveryNumber: 458,
        salesDate: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Pendente',
      },
      {
        id: 2,
        userId: 202,
        sellerId: 5,
        totalPrice: 165.80 ,
        deliveryAddress: 'Avenida Afonso Pena, Boa Viagem, Belo Horizonte, MG',
        deliveryNumber: 300,
        salesDate: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Preparando',
      },
      {
        id: 3,
        userId: 206,
        sellerId: 5,
        totalPrice: 165.80 ,
        deliveryAddress: 'Avenida Afonso Pena, Boa Viagem, Belo Horizonte, MG',
        deliveryNumber: 250,
        salesDate: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Em Trânsito',
      },
      {
        id: 4,
        userId: 190,
        sellerId: 5,
        totalPrice: 165.80 ,
        deliveryAddress: 'Avenida Afonso Pena, Boa Viagem, Belo Horizonte, MG',
        deliveryNumber: 666,
        salesDate: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Entregue',
      },
], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
