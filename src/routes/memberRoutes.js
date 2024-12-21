const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();

router.get('/', memberController.getAll);
router.get('/:id', memberController.getById);
router.get('/:id/borrowings', memberController.getBorrowingHistory);
router.post('/', memberController.create);


module.exports = router;
