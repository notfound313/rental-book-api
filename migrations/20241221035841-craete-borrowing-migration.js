'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('borrowings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      book_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'books', 
          key: 'id',
        },
      },
      member_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'members', 
          key: 'id',
        },
      },
      borrow_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      return_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM('BORROWED', 'RETURNED'),
        defaultValue: 'BORROWED',
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
    await queryInterface.dropTable('borrowings');
  },
};
