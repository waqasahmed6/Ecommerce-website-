import orderController from "../../controller/orders/index.js";
import { Router } from "express";
const ordersRouter =Router()

ordersRouter.delete("/:id",orderController.delete)
ordersRouter.put("/:id",orderController.update)
ordersRouter.post("/create",orderController.create)

export default ordersRouter