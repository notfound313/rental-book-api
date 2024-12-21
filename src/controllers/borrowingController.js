const borrowingService = require('../services/borrowingServices')

const borrowingController = {
    borrowBook: async (req, res) => {
        try {
            const { member_id, book_id } = req.body;
            const result = await borrowingService.createBorrowing({ member_id, book_id });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    returnBook: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await borrowingService.returnBook(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getBorrowingById: async (req, res) => {
        try {
            const { id } = req.params;
            const history = await borrowingService.getBorrowingById(id);
            res.status(200).json(history);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllBorrowing: async (req, res) => {
        try {
            const borrowings = await borrowingService.getAllBorrowing();
            res.status(200).json(borrowings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
};
module.exports = borrowingController;
