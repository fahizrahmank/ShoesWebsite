import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Style.css'; 


const NewFooter = () => {
  return ( 
<>   
    <div className='footer'>
    <footer style={{position:'fixed-top'}} className="footer">
      <div className="footer-content">
        <div style={{textDecoration:'non'}} className="footer-logo"> PLAYSHOE</div>
        <div className="footer-links">
        <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="light">Home</Button> </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
      <Button variant="light">Login</Button> </Link> 
      <Link to="#" style={{ textDecoration: 'none' }}>
      <Button variant="light">Contact Us</Button> </Link>
        </div>
        <div style={{display:'block'}}>
      
   
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};

export default NewFooter;
