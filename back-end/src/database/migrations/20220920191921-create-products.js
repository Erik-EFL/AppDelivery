'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('products',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL(4, 2),
    urlImage: Sequelize.STRING,
  });

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('products');
  }
};
