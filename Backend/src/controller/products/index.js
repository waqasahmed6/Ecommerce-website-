import productModel from "../../model/products/index.js";

const productController = {
  create: async (req, res) => {
    try{
    const { productName, productImage, productStock, productPrice } = req.body;
 await productModel.create({
        productName, productImage, productStock, productPrice 
    });
    
    
      res.status(201).json({ message: "product created successfully" });  
}catch(err){
    res.json({message:"errror creating product "+err})
}
  },
  delete:async (req,res)=>{
    try {
        const{id}=req.params
        await productModel.destroy({
            where:{id}
        })
        res.status(200).json({message:"product deleted successfully"})
    } catch (error) {
        
    }
  },
  update:async(req,res)=>{
    try {
        const{id}=req.params
    const {productName, productImage, productStock, productPrice } = req.body;
    const response = await productModel.findOne({
        where:{id}
    })
    if(!response){
        res.json({message:"product not found"})
    }else{
        await productModel.update({productName, productImage, productStock, productPrice },{where:{id}})
        res.json({message:"product updated successfully"})
    }
        
    } catch (error) {
        res.json({message:"error updating product" ,error})
    }
  }

}
export default productController