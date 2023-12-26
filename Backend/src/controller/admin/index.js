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
        res.json({ message: "Invalid credentials" });
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
          console.log(token)

          req.session.token = token;
          req.session.user = info;
          req.session.save();

          res.status(200).json({ message: "Login successfullt" });
        } else {
          res.json({ message: "Invaid credentials" });
        }
      }
    } catch (error) {
      res.json({ message: "Error occoured during login " + error }, console.log(error));
    }
  },
};

export default adminController;
