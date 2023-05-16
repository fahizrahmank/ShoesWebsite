
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { context} from "./Context";
import { useContext } from "react";
import { Link, useNavigate} from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();
  const UserData=useContext(context);
  const {sign,setLogedin}=UserData;
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Must contain at least one uppercase, one lowercase, one number and one special character"
      )
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    const email=values.email;
    const password=values.password;
    console.log(typeof password);

  
    console.log(typeof email);
    const filterUSer=sign.filter((element)=>element.email===email&&element.password===password);
    console.log(filterUSer);
setLogedin(true)
    if(filterUSer.length>0){
      navigate('/')
  }
  else{
    alert('User Not Exist')
  }
  }
  // const handleLogin=()=>{

  // }

  return (
  <div className="beef">
    <div className="inform">
      <h2>LogIn</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
          <Form>
           
            <div className="in-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-things" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="in-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-things"  />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" className="btn btn-primary in-button" >
              LOGIN
            </button>
            <Link  to="/signup" className="acnt-text"><p className="p-txt">Dont you have an Account?</p>Create Account</Link>
          </Form>
        
      </Formik>

    </div>
    </div>
  );
};

export default Login;