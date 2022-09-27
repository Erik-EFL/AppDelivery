'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('users',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: Sequelize.STRING,
    role: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
