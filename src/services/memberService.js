const Member = require('../models/member');

const createMember = async (payload) => {
    try {
        const { name, email, phone, address } = payload
        const member  = await Member.create({ name, email, phone, address })
        return member
    }catch(error){
        throw new Error(error.message);
        
    }    
};

const findAllMember = async () => {
    try {
        const members = await Member.findAll();
        return members;
    } catch (error) {
        throw new Error(error.message);
    }
};
const findMemberById = async (id) => {
    try {
        const member = await Member.findByPk(id);
        if (!member) {
            throw new Error('Member not found');
        }
        return member;
    } catch (error) {
        throw new Error(error.message);
    }
}; 

const getBorrowingHistory = async (memberId) => {
    try {
        const member = await Member.findByPk(memberId, {
            include: [{
                association: 'borrowings',
                where: {
                    status: ['BORROWED', 'RETURNED']
                }
            }]
        });
        
        if (!member) {
            throw new Error('Member not found');
        }
        
        return member.borrowings;
    } catch (error) {
        throw new Error(error.message);
    }
};



module.exports = {
     createMember,
     findAllMember,
     findMemberById,
     getBorrowingHistory,
 }
 