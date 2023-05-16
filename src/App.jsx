
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Navigation from './assets/Components/Navigation';
import Products from './assets/Components/Products'
import Home from './assets/Components/Home'
import Signup from './assets/Components/Signup';
import Login from './assets/Components/Login';
import Men from './assets/Components/Men';
import Women from './assets/Components/Women';
import View from './assets/Components/View';
import Cart from './assets/Components/Cart';
import {context} from './assets/Components/Context'
import { useEffect, useState } from 'react';
import Admin from './assets/Components/Admin';
import { useLocation } from 'react-router-dom';
import User from './assets/Components/User';
import AdminProducts from './assets/Components/AdminProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { shoesData } from './assets/Components/ProductData';
import AddNewProduct from './assets/Components/AddNewProduct';
import EditProduct from './assets/Components/EditProduct';
import Footer from './assets/Components/Footer';
import UserSearch from './assets/Components/UserSearch';


function App() {
   const [state,setState]=useState([]);
   const [product,setProduct]=useState(shoesData);
   const [edit,setEdit]=useState([]);
   const location=useLocation();
   const [change,setChange]=useState(false );
   const [logedin,setLogedin]=useState(false)

   const [sign,setSign]=useState([{
      name:'fahiz',
      email:'fahizrahmank@gmail.com'
   }]);
   const[search,setSearch]=useState('');     
 

 useEffect(()=>{
   if(location.pathname.includes('Admin') ||location.pathname.includes('signup')||location.pathname.includes('login')){
      setChange(true)
   }else{
      setChange(false)
   }
 },[location])
 const data ={
   state,
   setState,

   product,
   setProduct,

   edit,
   setEdit,

   sign,
   setSign,

   search,
   setSearch,

   logedin,
   setLogedin
}

  return (
    
   <div>
    

    
    <context.Provider value={data}> 
    {change?null:<Navigation/>}    


    <Routes>
   
   <Route path='/' element={<Home/>}/>
   <Route path='/product' element={<Products/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/> 
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/search' element={<UserSearch/>}/>

      <Route element={<Admin/>}>
         <Route path='/Admin/user' element={<User/>}/>
         <Route path='/Admin/AdminProducts' element={<AdminProducts/>}/>
         <Route path='/Admin/addNewProduct' element={<AddNewProduct/>}/>
         <Route path='/Admin/editProduct' element={<EditProduct/>}/>
      </Route>

    </Routes>
    </context.Provider>

    {change?null:<Footer/>}
    {/* {change?null:<NewFooter/>} */}

   </div>
   
   
  )
}

export default App
