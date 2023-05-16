import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { context } from './Context';
import { useContext} from 'react';






const AdminProducts = () => {
  const nav=useNavigate()
  const data= useContext(context)
  const {product,setProduct,setEdit}=data


  const deleteProduct=(item)=>{
    const remove=parseInt(item.target.id)
const updated=product.filter((e)=>parseInt(e.id)!==remove)
setProduct(updated) 
  }
  const editPro=(item)=>{
const remove =parseInt(item.target.id)
const updated=product.filter((e)=>remove===parseInt(e.id))
setEdit(updated)
const newUpdated=product.filter((e)=>remove!==parseInt(e.id))
setProduct(newUpdated)
nav('/Admin/editProduct')


  }

  return (
<div> 
  
    <div style={{position:'relative',top:'5%',left:'500px' ,width:'950px',height:'500px'}} >
   
   
      <h1>Products</h1>
      <Form   style={{position:'relative', right:'370px',height:"50px"}} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <br />
      
      <div style={{position:'relative', right:'370px',height:"300px"}}> 


    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Image path</th>
          <th>Dec</th>
          <th>Type</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item)=>(

           <tr key={item.id}>
           <td>{item.id}</td>
           <td> {item.brand}</td>
           <td>{item.price}</td>
           <td>{item.Qty}</td>
           <td> img{item.img}</td>
           <td>{item.dec}</td>
           <td>{item.type}</td>
           <td><Button variant="outline-secondary"  id={item.id} onClick={editPro}>Edit</Button></td>
           <td><Button variant="outline-danger" id={item.id} onClick={deleteProduct}>Delete</Button>{' '}</td>
           
           </tr> 
        ))}
      </tbody>
    </Table>
    </div>
    </div>
    </div>
  )
}

export default AdminProducts
