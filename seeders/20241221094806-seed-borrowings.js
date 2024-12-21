'use strict';

const Book = require('../src/models/book');
const Member = require('../src/models/member');
const Borrowing = require('../src/models/borrowing');

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    const borrowingCount = await Borrowing.count();

    if (borrowingCount === 0) {
  
      const book1 = await Book.findOne({ where: { title: 'The Great Gatsby' } });
      const book2 = await Book.findOne({ where: { title: '1984' } });
      const member1 = await Member.findOne({ where: { email: 'john.doe@example.com' } });
      const member2 = await Member.findOne({ where: { email: 'jane.smith@example.com' } });

      if (!book1 || !book2 || !member1 || !member2) {
        console.error('Error: Book or Member not found!');
        return;
      }

      
      await queryInterface.bulkInsert('borrowings', [
        {
          id: Sequelize.UUIDV4,
          book_id: book1.id,
          member_id: member1.id,
          borrow_date: new Date(),
          return_date: null,
          status: 'BORROWED',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.UUIDV4,
          book_id: book2.id,
          member_id: member2.id,
          borrow_date: new Date(),
          return_date: null,
          status: 'BORROWED',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});

      console.log('Borrowings data inserted.');
    } else {
      console.log('Borrowings table already populated.');
    }
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('borrowings', null, {});
  }
};
