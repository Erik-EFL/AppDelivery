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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    price: Sequelize.DECIMAL(4,2),
    urlImage: {
      type: Sequelize.STRING,
      field: 'url_image',
      allowNull: false,
      defaultValue: ''
    },
  });

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('products');
  }
};
