import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const adminModel = sequelize.define("admin",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
export default adminModel