import { FormikProvider, useFormik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import {useNavigate ,Link } from 'react-router-dom';
import AxiosInstnace from "../../utils/Axios/Axiox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const userSchema = object({
    email: string().min(8).email().max(20).required(),
    password: string().min(8).max(20).required(),
  });
  
  
  function Login() {
  const navigate =useNavigate()

  const login = async (data) => {
  return AxiosInstnace.post("/admin/login", data);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await login(data)
    toast.success(response.data.message)
    navigate("/adminDashboard")
      
  } catch (error) {
      toast.error(error.response.data.message)
console.log(error)
    }  
    
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
    <FormikProvider value={formik}>
      <ToastContainer/>
      <form className="form" action="">
        <h1 className="heading">Login</h1>

        <label htmlFor="email">Email</label>
        <Field className="input" name="email" />
        <ErrorMessage name="email" />
        <br />

        <label htmlFor="password">Password</label>
        <Field className="input" name="password" />
        <ErrorMessage name="password" />
        <br />
        <button className="btn" onClick={formik.handleSubmit}>
          Login
        </button>
        <h3 className="msg">
          Dont have account? <Link to="admins/signup">Create new account </Link>
        </h3>
      </form>
    </FormikProvider>
  );
}
export default Login;
