import { useParams } from "react-router-dom"
import { shoesData } from "./ProductData"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext} from "react";
import { context } from "./Context";


const View = () => {
  const add=useContext(context)
  const {state , setState,logedin}=add

    const {id}=useParams()
 const data=shoesData.filter((item)=>item.id===parseInt(id));


 const myCart=()=>{
  if(logedin){

  
  const[newData]=data;
  console.log(data);

  const duplicate=state.filter((item)=>item.id===parseInt(id))

  if(duplicate.length>0){
    return alert("This Product already exist in your cart")
  }
  else{
    setState(prevState =>[...prevState,newData]);
    alert("Product added to cart");
    console.log(state);
  
  }
}else{
  alert('please login')
}
  
 }



//  const [items,setItems]=useState(shoesData);

//  const decQty = (id) => {
//   const newItem = items.map((item) =>
//     item.id == parseInt(id) && item.Qty>1  ? { ...item, Qty: item.Qty - 1 } : item
//   );
//   setItems(newItem);
// };

// const incQty = (id) => {
//   const newItem = items.map((item) =>
//     item.id ==  parseInt(id) ? { ...item, Qty: item.Qty + 1 } : item
//   );
//   setItems(newItem)
//   console.log(items)
// };

  return (
    <div>
        {data.map((item)=>(
             <CardGroup key={item.id} className='card-group'>
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
                   </Button>\
                   {item.Qty}
                   <Button onClick={()=>incQty(item.id)} variant='primary' size='sm'>
                     +
                   </Button>
                 </p> */}
                 <Button variant='outline-dark' onClick={myCart}>Add to cart</Button>
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

export default View
