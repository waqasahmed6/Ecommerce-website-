import { Router } from "express";
import adminRouter from "./adminRouter/index.js";
import productRouter from "./productRouter/index.js";
import categoryRouter from "./category/index.js";
import ordersRouter from "./ordersRouter/index.js";
const allRoutes = Router()

allRoutes.use("/admin",adminRouter)
allRoutes.use("/product",productRouter)
allRoutes.use("/category",categoryRouter)
allRoutes.use("/order",ordersRouter)


export default allRoutes