import categoryController from "../../controller/category/index.js";
import { Router } from "express";
const categoryRouter = Router()


categoryRouter.post("/create",categoryController.create)
categoryRouter.delete("/:id",categoryController.delete)
export default categoryRouter