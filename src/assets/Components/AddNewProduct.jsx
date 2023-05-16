import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useRef } from 'react';
import { context } from './Context';

const AddNewProduct = () => {
    const reff=useRef(null)
    const add=useContext(context)
    const {product,setProduct}=add


    const addItem=()=>{
const id=reff.current.Id.value
const brand=reff.current.Brand.value 
const price=reff.current.Price.value
const qty=reff.current.Qty.value
const img=reff.current.Image.value
const dec=reff.current.Dec.value
const type=reff.current.Type.value
setProduct([...product,{id,brand,price,qty,img,dec,type}])
console.log(product);
}
  return (
    <div className='container' style={{backgroundColor:'#85929E',width:'100%'}}>
          <>
    <br /><br /> 
    <Form ref={reff} onSubmit={(e)=>e.preventDefault()}>   
      <InputGroup className='card-group' size="lg" >
        <InputGroup.Text id="inputGroup-sizing-lg">Id</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Id'
        />
      </InputGroup>
      <br /><br />
      <InputGroup size="lg" >
        <InputGroup.Text id="inputGroup-sizing-lg">Brand</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Brand'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Price</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Price'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Qty</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Qty'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Image</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Image'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Dec</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Dec'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Type</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Type'
        />
      </InputGroup>
      </Form>
      <br /><br />
      <Button style={{display:'block',margin:'0 auto'}} variant="success" type='submit' onClick={addItem}> S a v e </Button>{' '}


    </>
      
    </div>
  )
}

export default AddNewProduct
