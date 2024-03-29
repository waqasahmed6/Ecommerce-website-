import Joi from "joi";

const adminValidation = {
  check: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        name: Joi.string().min(2).max(15).required(),
        email: Joi.string().min(10).max(25).required(),
        password: Joi.string().min(8).max(15).required(),
      })
      const { error, value } = schema.validate(body)
      console.log(error)
      if(error){
        res.json({ message: "error occoured during validation", error });
      }
      next();
    } catch (error){res.json({ error });}
  },
};

export default adminValidation;
