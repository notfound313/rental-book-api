'use strict';

const Book  = require('../src/models/book');  

module.exports = {
  up: async (queryInterface, Sequelize) => {   
    const bookCount = await Book.count();

    if (bookCount === 0) {
      
      await queryInterface.bulkInsert('books', [
        {
          id: Sequelize.UUIDV4,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          published_year: 1925,
          stock: 10,
          isbn: '9780743273565',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.UUIDV4,
          title: '1984',
          author: 'George Orwell',
          published_year: 1949,
          stock: 15,
          isbn: '9780451524935',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.UUIDV4,
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          published_year: 1960,
          stock: 8,
          isbn: '9780061120084',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
      console.log('Books data inserted.');
    } else {
      console.log('Books table already populated.');
    }
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkDelete('books', null, {});
  }
};
