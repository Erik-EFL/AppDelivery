'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Users',
  [
    {
      id: 200,
      name: 'John Doe',
      password: 'Ful4N@Gr1ng@',
      email: 'JohnDoe@hyamara.com',
      role: 'customer'
    },
    {
      id: 5,
      name: 'Gabriel Pesch',
      password: 'Ful4N@QueMeDevePizza',
      email: 'GabrielPesch@microlins.com',
      role: 'seller'
    },
    {
      id: 1,
      name: 'Claudio',
      password: 'MascoteT19',
      email: 'Claudio@calud.com',
      role: 'administrator'
    },
    {
      id: 202,
      name: 'Heleno',
      password: 'MascoteT19',
      email: 'Heleno@calud.com',
      role: 'customer',
    },
    {
      id: 206,
      name: 'Pricila Bom dia',
      password: 'MascoteT19',
      email: 'PricilaBomdia@calud.com',
      role: 'customer',
    },
    {
      id: 190,
      name: 'Paulo Rocha',
      password: 'MascoteT19',
      email: 'PàulinhoRocha@calud.com',
      role: 'customer',
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
  }
};
