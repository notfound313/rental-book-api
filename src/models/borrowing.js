const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); 
const Member = require('./member'); 
const Book = require('./book'); 


const Borrowing = sequelize.define('borrowings', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  book_id: {
    type: DataTypes.UUID,
    references: {
      model: Book,
      key: 'id',
    },
    allowNull: false,
  },
  member_id: {
    type: DataTypes.UUID,
    references: {
      model: Member,
      key: 'id',
    },
    allowNull: false,
  },
  borrow_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('BORROWED', 'RETURNED'),
    defaultValue: 'BORROWED',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});


Book.hasMany(Borrowing, { foreignKey: 'book_id', onDelete: 'CASCADE' });
Borrowing.belongsTo(Book, { foreignKey: 'book_id' });

Member.hasMany(Borrowing, { foreignKey: 'member_id', onDelete: 'CASCADE' });
Borrowing.belongsTo(Member, { foreignKey: 'member_id' });

module.exports = Borrowing;
