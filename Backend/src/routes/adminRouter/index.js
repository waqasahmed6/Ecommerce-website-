import adminController from "../../controller/admin/index.js";
import { Router } from "express";
import adminValidation from "../../validation/validation.js";
const adminRouter = Router()

adminRouter.post('/register',adminValidation.check,adminController.register)
adminRouter.post('/login', adminController.login)
adminRouter.get('/', adminController.findall)
adminRouter.put('/:admin_id', adminController.update)
adminRouter.get('/:admin_id', adminController.findOne)
adminRouter.delete('/:admin_id', adminController.delete)


export default adminRouter