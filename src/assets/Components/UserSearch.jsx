import { useContext } from "react"
import { context } from "./Context"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import'./Style.css'
const UserSearch = () => {
    const add=useContext(context)
    const{search,product}=add;

  return (
    <div>
        {product.filter((val)=>{
            if(search===" "){
                return val;
            }
            else if(val.brand.toLowerCase().includes(search.toLowerCase())){
                return val;
            }else{
                return false;
            }
        })
        .map((item)=>(
            <CardGroup className='card-group' key={item.id} >
            <Card>
              <Card.Img variant='top' src={item.img} />
              <Card.Body>
                <Card.Title>{item.brand}</Card.Title>
                <Card.Text>{item.dec}</Card.Text>
                <h5>price:₹ {item.price} </h5>
              </Card.Body>
              <Card.Footer>                
              </Card.Footer>
            </Card>
          </CardGroup>
            
        ))
        }
      
    </div>
  )
}

export default UserSearch
