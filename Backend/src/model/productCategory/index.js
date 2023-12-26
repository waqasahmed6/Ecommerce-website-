import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import productModel from "../products/index.js";
const categoryModel =  sequelize.define("productsCategory",{
categoryName:{
    type:DataTypes.STRING,
    allownull:false
}
})
export default categoryModel


categoryModel.hasMany(productModel)
productModel.hasOne(categoryModel)