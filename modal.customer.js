
const Sequelize = require('sequelize');
const database = require('./connect');
 
const Customer = database.define('customers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    active: Sequelize.STRING
})
 
module.exports = Customer;