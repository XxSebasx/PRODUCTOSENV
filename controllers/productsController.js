const { marca, product } = require("../models/relacion");

module.exports = {
    async getProducts (req,res){
        try {
            const productos = await product.findAll();
            res.json(productos)
        } catch (error) {
            console.log(error)
        }
    },

    async createProduct(req,res){
        try {
            let {CIFMark, name, price, category} = req.body;
            let producto = await product.create({CIFMark, name, price, category})
            res.json(producto)
        } catch (error) {
            console.log(error)
        }
    }
}