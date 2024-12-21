const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');


router.post('/', borrowingController.borrowBook);
router.get('/:id', borrowingController.getBorrowingById);
router.get('/', borrowingController.getAllBorrowing);
router.put('/:id/return', borrowingController.returnBook);


module.exports = router;