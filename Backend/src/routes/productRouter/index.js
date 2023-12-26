import productController from "../../controller/products/index.js";
import { Router } from "express";
const productRouter =Router()

productRouter.post("/create",productController.create)
productRouter.delete("/:id",productController.delete)
productRouter.put("/:id",productController.update)

export default productRouter