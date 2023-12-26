import adminController from "../../controller/admin/index.js";
import { Router } from "express";
const adminRouter = Router()

adminRouter.post('/register',adminController.register)
adminRouter.post('/login',adminController.login)


export default adminRouter