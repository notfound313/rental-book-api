const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Member = sequelize.define('members', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,  
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
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




module.exports = Member;