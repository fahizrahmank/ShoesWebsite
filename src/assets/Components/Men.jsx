
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './Context';


function Men() {
const dataa=useContext(context)
const {product}=dataa

const data= product.filter((item)=>item.type==='Men')

const nav=useNavigate()



  return (
    <>
     <h1 style={{ textAlign: 'center' }} className='bg-dark text-white'>
        Products for Men
      </h1>
    {/* <div className='d-inline-flex'>  */}
    <div className='d-flex-column container'> 
    <div className='row gap-5'> 
     
      {data .map((item) => (
        <CardGroup key={item.id} className='card-group'>
          <Card>
            <Card.Img className='image' variant='top' src={item.img} />
            <Card.Body>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>{item.dec}</Card.Text>
              <h5>price:₹ {item.price} </h5>
             
              <Button onClick={()=>nav(`/view/${item.id}`)} variant='outline-dark'>View Product</Button>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'> {item.latest} </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      ))}
      </div>
      </div>

    </> 
  );
}

export default Men;
