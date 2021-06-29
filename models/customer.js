
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../config/db');

class Customer extends Model {}

Customer.init(
  {
    fistName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birth_date: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    modelName: 'user'
  }
);
// sequelize.sync();
module.exports = Customer;