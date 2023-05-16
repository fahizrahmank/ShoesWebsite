import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { context } from './Context';

const User = () => {
  const data=useContext(context)
  const {sign} = data
  console.log(sign);
  return (
    <div style={{backgroundColor:'white',width:'100%'}}>
    <h1 style={{textAlign:'center'}}>User</h1>
    <br /><br />

    <input style={{borderRadius:'7px',marginLeft:'45%'}} placeholder="Search Here" type="text" />

<br /><br />
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>E mail</th>
          <th>Username</th>
        </tr>
      </thead>
     
            <tbody>
            {sign.map((item,index)=>(
            <tr key={index}>
              <td>1</td>
              <td>{item.email}</td>
              <td>{item.name}</td>
            </tr>
              ))}
          </tbody>
      
    
    </Table>


    </div>
  )
}

export default User
