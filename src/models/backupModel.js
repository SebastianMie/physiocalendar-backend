const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Backup = sequelize.define('Backup', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  tableName: 'backups'
});

module.exports = Backup;
