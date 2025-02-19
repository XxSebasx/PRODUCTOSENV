const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const mark = sequelize.define('mark', {
    CIF: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    markName: {  
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'marks',
    timestamps: false  
});

sequelize.sync({ alter: true }).then(() => {
    console.log('Tabla marcas sincronizada');
});

module.exports = mark;