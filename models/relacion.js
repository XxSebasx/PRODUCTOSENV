const marca = require('./Mark');
const product = require('./Product');
marca.hasMany(product, { foreignKey: 'CIFMark' });
product.belongsTo(marca, { foreignKey: 'CIFMark' });

module.exports = {
    marca,
    product
};