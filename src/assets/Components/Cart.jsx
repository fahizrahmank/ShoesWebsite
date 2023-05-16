import { useContext } from "react"
import { context } from "./Context";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const add=useContext(context)
  const {state,setState}=add;

  console.log(state);


 const Remove=(e)=>{
  const RemoveId=parseInt(e.target.id)
  const BalanceData=state.filter((item)=>item.id!==RemoveId)
  setState(BalanceData)
 }
  return (

    <div>
    {state.map((item)=>(
      <CardGroup className='card-group' key={item.id} >
        <Card>
          <Card.Img variant='top' src={item.img} />
          <Card.Body>
            <Card.Title>{item.brand}</Card.Title>
            <Card.Text>{item.dec}</Card.Text>
            <h5>price:₹ {item.price} </h5>
            {/* <p>
              Qty:
              <Button onClick={()=>decQty(item.id)} variant='primary' size='sm'>
                -
              </Button>
              {item.Qty}
              <Button onClick={()=>incQty(item.id)} variant='primary' size='sm'>
                +
              </Button>
            </p> */}
            <Button variant='outline-dark' >Buy Now</Button>

            <Button onClick={Remove} id={item.id} className="ms-3" variant='outline-dark' >Remove item</Button>

          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 5 days ago</small>
            
          </Card.Footer>
        </Card>
      </CardGroup>
      ))}
    </div>

  )
}

export default Cart
