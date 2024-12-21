const memberService = require('../services/memberService');

const memberController = {
    create: async (req, res) => {
        const { name, email, phone, address } = req.body;
        try {
            const member = await memberService.createMember({name, email, phone, address});
            res.status(201).json(member);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            const members = await memberService.findAllMember();
            res.status(200).json(members);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const member = await memberService.findMemberById(id);
            if (!member) {
                return res.status(404).json({ message: 'Member not found' });
            }
            res.status(200).json(member);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getBorrowingHistory: async (req, res) => {
        try {
            const { id } = req.params;
            const history = await memberService.getBorrowingHistory(id);
            if (!history) {
                return res.status(404).json({ message: 'Borrowing history not found' });
            }
            res.status(200).json(history);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

};

module.exports = memberController;