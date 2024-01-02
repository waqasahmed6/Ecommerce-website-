import adminModel from "../../model/admin/index.js";
import { hash, compare } from "bcrypt";
import Jwt from "jsonwebtoken";
const adminController = {
  register: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const response = await adminModel.findOne({
        where: { email },
      });
      //  console.log(response)
      if (response) {
        return res.status(400).json({ message: "Email already registered" });
      } else {
        const hashpassword = await hash(password, 5);
        await adminModel.create({
          name,
          email,
          password: hashpassword,
        });
        res.status(201).json({ message: "Registered successfully" });
      }
    } catch (error) {
      res.json(error + " Error occoured during registration");
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const response = await adminModel.findOne({
        where: { email },
      });

      if (!response) {
        res.status(400).json({ message: "Invalid credentials" });
      } else {
        const ismatch = await compare(password, response.password);
        if (ismatch == true) {
          const info = {
            id: response.id,
            email: response.email,
          };
          const token = Jwt.sign(info, process.env.SECRET_KEY, {
            expiresIn: "1d",
          });
         

          req.session.token = token;
          req.session.user = response;
          req.session.save();

          res.status(200).json({ message: "Login successfully" });
        } else {
          res.status(400).json({ message: "Invalid Credentials" });
        }
      }
    } catch (error) {
      res.json({ message: "Error occoured during login " + error }, console.log(error));
    }
  },
  findall:async (req,res)=>{
    // const{adminID}=req.params
    try {
      const response =  await adminModel.findAll()
      res.json(response)
    } catch (error) {
      
    }

  },
  update:async(req,res)=>{
    try {
        const{admin_id}=req.params
    const {name, email, password } = req.body;
    const response = await adminModel.findOne({
        where:{id:admin_id}
    })
    if(!response){
        res.status(400).json({message:"Admin not found"})
    }else{
      if(response.email==email){
        return res.status(400).json({message:"email already in use"})       
      }
      let hashpass= await hash(password,5)
        await adminModel.update({name, email, password:hashpass },{where:{id:admin_id}})
        res.json({message:" Updated successfully"})
    }
        
    } catch (error) {
        res.json({message:"error updating admin" ,error})
    }
  },
  findOne:async(req,res)=>{
    const{admin_id}=req.params
  try {
     const response=await adminModel.findOne({
      where:{id:admin_id}
     })    
     res.status(200).json({response,message:"Admin found successfully"})
  } catch (error) {
    res.json({message:"errror finding admin",error})
  }

  },
  delete:async(req,res)=>{
    const {admin_id}=req.params
    try {
      const response =await adminModel.findOne({where:{id:admin_id}})
      if(!response){
        res.status(404).json({message:"admin not found"})
      }
      await adminModel.destroy({where:{id:admin_id}})
      res.status(200).json({message:"admin deleted successfully"})
      
    } catch (error) {
      // res.status(404).json({message:"Error deleting admin"})
      console.log(error)
    }
  }

};


export default adminController;
