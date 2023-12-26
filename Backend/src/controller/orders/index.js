import orderModel from "../../model/orders/index.js"

const orderController = {
  create: async (req, res) => {
    try{
    const { customerName, phoneNumber, address, productName } = req.body;
 await orderModel.create({
    customerName, phoneNumber, address, productName
    });
    
    
      res.status(201).json({ message: "product created successfully" });  
}catch(err){
    res.json({message:"errror creating product "+err})
}
  },
  delete:async (req,res)=>{
    try {
        const{id}=req.params
        await orderModel.destroy({
            where:{id}
        })
        res.status(200).json({message:"product deleted successfully"})
    } catch (error) {
        
    }
  },
  update:async(req,res)=>{
    try {
        const{id}=req.params
        const { customerName, phoneNumber, address, productName } = req.body;
    const response = await orderModel.findOne({
        where:{id}
    })
    if(!response){
        res.json({message:"product not found"})
    }else{
        await orderModel.update({customerName, phoneNumber, address, productName  },{where:{id}})
        res.json({message:"product updated successfully"})
    }
        
    } catch (error) {
        res.json({message:"error updating product" ,error})
    }
  }

}
export default orderController