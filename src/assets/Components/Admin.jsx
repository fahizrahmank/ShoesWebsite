import { FaUserCircle } from 'react-icons/fa';
import { GiTakeMyMoney,GiBallerinaShoes } from 'react-icons/gi';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';





const Admin = () => {
  const nav=useNavigate()
  return (
    <div className='d-flex'>
    <div  className='sidebar'>
      <h1 style={{marginLeft:'20px',fontWeight:'bolder',}}> ADMIN</h1>
      <ul  >

        <li ><FaUserCircle/><Link to='/Admin/user' style={{textDecoration:'none' , color:'white'}}> User </Link></li>
        <br /><br />
        <li><GiBallerinaShoes/> <Link to='/Admin/AdminProducts'style={{textDecoration:'none' , color:'white'}}> Products </Link></li>
        <br /><br />
         <li><GiTakeMyMoney/> Revenue</li>
         <br /><br />
         <Button variant="outline-secondary" onClick={()=>nav('/Admin/addNewProduct')}>Add New Product</Button>{' '}
         <br /><br />
         <Button variant="outline-secondary" onClick={()=>nav('/')}>Home</Button>{' '}

      

      </ul>
      </div>
      <Outlet/>
    </div>
  )
}



export default Admin;

