
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {  useContext } from 'react'
import{context} from './Context'
import './Style.css'


function Products() {
const nav= useNavigate()
const add=useContext(context)
const{product}=add
  return (
    <>

     <h1 style={{ textAlign: 'center' }} className='bg-dark text-white'>
        Products
      </h1>
    <div className='d-flex-column container'> 
    <div className='row gap-5'> 
     
      {product.map((item) => (
        <CardGroup  key={item.id} className='card-group mx-auto'>
          <Card>
            <Card.Img className='image' variant='top' src={item.img} />
            <Card.Body style={{textAlign:'center'}}>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>{item.dec}</Card.Text>
              <h5>price:₹ {item.price} </h5>
        
              <Button onClick={()=>nav(`/view/${item.id}`)} variant='outline-dark'>View Product</Button>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>{item.latest}</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      ))}
       </div>
      </div>
    </> 
  );
}

export default Products;
