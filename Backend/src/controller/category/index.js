import categoryModel from "../../model/productCategory/index.js";
const categoryController={
    create:async(req,res)=>{
        try {
            const {categoryName,productId}=req.body
            await categoryModel.create({
                categoryName,productId
            })
            res.json({message:"succes"})
            
        } catch (error) {
            res.json({message:"error during category creation"},error)
        }
    },
    delete:async(req,res)=>{
        try {
            const {id}=req.params
            await categoryModel.destroy({
                where:{id}
            })
            res.json({message:"category deleted"})
        } catch (error) {
            res.json({message:"error deleting category "}+error)
        }
        
}
}
export default categoryController