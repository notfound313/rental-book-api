'use strict';

const Member = require('../src/models/member');  

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const memberCount = await Member.count();

    if (memberCount === 0) {     
      await queryInterface.bulkInsert('members', [
        {
          id: Sequelize.UUIDV4,
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
          address: '123 Main St, Springfield, IL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.UUIDV4,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '0987654321',
          address: '456 Elm St, Springfield, IL',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
      console.log('Members data inserted.');
    } else {
      console.log('Members table already populated.');
    }
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('members', null, {});
  }
};
