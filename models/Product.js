const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const mark = require('./Mark'); 

const product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    CIFMark:{
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'marks',
            key: 'CIF'
        },
        onDelete: 'CASCADE'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false


});

sequelize.sync({ alter: true }).then(() => {
    console.log('Tabla productos sincronizada');
});

module.exports = product;