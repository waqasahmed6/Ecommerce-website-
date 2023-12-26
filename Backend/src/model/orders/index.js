import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const orderModel = sequelize.define("orders",{
    customerName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    productName:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
export default orderModel