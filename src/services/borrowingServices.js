const Borrowing = require('../models/borrowing')
const Book = require('../models/book')

const createBorrowing = async (borrowData) => {
    try {
        const { book_id, member_id } = borrowData;
        
        const book = await Book.findByPk(book_id);
        if (!book) {
            throw new Error('Book not found');
        }
        
        if (book.stock <= 0) {
            throw new Error('Book is out of stock');
        }

        const activeBorrowings = await Borrowing.count({
            where: {
                member_id,
                status: 'BORROWED'
            }
        });

        if (activeBorrowings >= 3) {
            throw new Error('Member has reached maximum borrowing limit (3 books)');
        }
        
        const borrowing = await Borrowing.create({ book_id, member_id });
        
        book.stock -= 1;
        await book.save();
        
        return borrowing    

    } catch (error) {
        throw new Error(error.message);
        
    }
}
const getAllBorrowing = async () => {
    try {
        const borrowings = await Borrowing.findAll();
        return borrowings;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getBorrowingById = async (id) => {
    try {
        const borrowing = await Borrowing.findByPk(id);
        if (!borrowing) {
            throw new Error('Borrowing not found');
        }
        return borrowing;
    } catch (error) {
        throw new Error(error.message);
    }
}

const returnBook = async (borrowingId) => {
    try {
        const borrowing = await Borrowing.findByPk(borrowingId)
        if (!borrowing) {
            throw new Error('Borrowing not found')
        }
        
        const book = await Book.findByPk(borrowing.book_id)
        if (!book) {
            throw new Error('Book not found')
        }

        borrowing.status = 'RETURNED'
        borrowing.return_date = new Date()
        await borrowing.save()
        
        book.stock += 1
        await book.save()
        
        return borrowing
    } catch (error) {
        throw new Error(error.message)
    }    
}



module.exports = {
    createBorrowing,
    getAllBorrowing,
    getBorrowingById,
    returnBook,  
}

