'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      published_year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      isbn: {
        type: Sequelize.STRING(13),
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  },
};
