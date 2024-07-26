const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('physiocalendar', 'physiouser', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
