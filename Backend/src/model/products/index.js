import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const productModel =  sequelize.define("products",{
productName:{
    type:DataTypes.STRING,
    allownull:false
},
imagePath:{
    type:DataTypes.STRING,
    allownull:false
},
productStock:{
    type:DataTypes.STRING,
    allownull:false
},
productPrice:{
    type:DataTypes.STRING,
    allownull:false
}
})
export default productModel