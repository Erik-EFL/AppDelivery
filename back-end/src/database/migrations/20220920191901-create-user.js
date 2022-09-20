'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    role: Sequelize.STRING,
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
