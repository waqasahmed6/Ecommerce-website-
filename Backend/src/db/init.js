import adminModel from "../model/admin/index.js"
import orderModel from "../model/orders/index.js"
import categoryModel from "../model/productCategory/index.js"
import productModel from "../model/products/index.js"
const initDb = async()=>{
await adminModel.sync({
    alter:true,
    force:false
}),
await productModel.sync({
    alter:true,
    force:false
}),
await categoryModel.sync({
    alter:true,
    force:false
}),
await orderModel.sync({
    alter:true,
    force:false
})
}
export default initDb
