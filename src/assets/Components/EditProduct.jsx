import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { context } from './Context';
import { useNavigate } from 'react-router-dom';


const EditProduct = () => {
    const reff=useRef(null)
   const add=useContext(context)
   const{edit,product,setProduct}=add

   const nav=useNavigate()

   const updatedd=()=>{

    const id=reff.current.Id.value
    const brand=reff.current.Brand.value
    const price=reff.current.Price.value
    const qty=reff.current.Qty.value
    const img=reff.current.Image.value
    const dec=reff.current.Dec.value
    const type=reff.current.Type.value
setProduct([...product,{id,brand,price,qty,img,dec,type}])

     nav('/Admin/AdminProducts')
   }

  return (
    
    <div>
        {edit.map((item)=>(
           
 <Form ref={reff} key={item.id} >   
 <InputGroup size="lg" >
   <InputGroup.Text id="inputGroup-sizing-lg">Id</InputGroup.Text>
   <Form.Control
     aria-label="Large"
     aria-describedby="inputGroup-sizing-sm"
     name='Id' defaultValue={item.id}
   />
 </InputGroup>
 <br /><br />
 <InputGroup size="lg" >
   <InputGroup.Text id="inputGroup-sizing-lg">Brand</InputGroup.Text>
   <Form.Control
     aria-label="Large"
     aria-describedby="inputGroup-sizing-sm"
     name='Brand'  defaultValue={item.brand}
   />
 </InputGroup>
 <br /><br />

 <InputGroup size="lg">
   <InputGroup.Text id="inputGroup-sizing-lg">Price</InputGroup.Text>
   <Form.Control
     aria-label="Large"
     aria-describedby="inputGroup-sizing-sm"
     name='Price'  defaultValue={item.price}
   />
 </InputGroup>
 <br /><br />

 <InputGroup size="lg">
   <InputGroup.Text id="inputGroup-sizing-lg">Qty</InputGroup.Text>
   <Form.Control
     aria-label="Large"
     aria-describedby="inputGroup-sizing-sm"
     name='Qty'  defaultValue={item.Qty}
   />
 </InputGroup>
 <br /><br />

 <InputGroup size="lg">
   <InputGroup.Text id="inputGroup-sizing-lg">Image</InputGroup.Text>
   <Form.Control
     aria-label="Large"
     aria-describedby="inputGroup-sizing-sm"
     name='Image'  defaultValue={item.img}
   />
 </InputGroup>
 <br /><br />

 <InputGroup size="lg">
   <InputGroup.Text id="inputGroup-sizing-lg">Dec</InputGroup.Text>
   <Form.Control
     aria-label="Large"
     aria-describedby="inputGroup-sizing-sm"
     name='Dec'  defaultValue={item.dec}
   />
 </InputGroup>
 <br /><br />

 <InputGroup size="lg">
   <InputGroup.Text id="inputGroup-sizing-lg">Type</InputGroup.Text>
   <Form.Control
     aria-label="Large"
     aria-describedby="inputGroup-sizing-sm"
     name='Type'  defaultValue={item.type}
   />
 </InputGroup>
 <Button style={{display:'block',margin:'0 auto'}} variant="success" type='submit' onClick={updatedd}> S a v e </Button>
 </Form>

    ))}
   


    </div>
  )
}

export default EditProduct
