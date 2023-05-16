import './Style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerr' >
    

    <footer style={{display:'flex',justifyContent:'space-around'}}>
  <ul  >
  <h1>Shop</h1>

    <Link to="/men" ><li><a href="#">Shop Men</a></li></Link>
    <Link to="/women" ><li><a href="#">Shop Women</a></li></Link>
    <li><a href="#">Lookbook</a></li>
    <li><a href="#">Gift Card</a></li>
    <li><a href="#">Sale</a></li>
  </ul>

  <ul>
  <h1>About</h1>

    <li><a href="#">Our Story</a></li>
    <li><a href="#">Our Materials</a></li>
    <li><a href="#">Our Value</a></li>
    <li><a href="#">Sustainability</a></li>
    <li><a href="#">Manufacture</a></li>
  </ul>

  <ul>
  <h1>Need Help?</h1>

    <li><a href="#">FAQs</a></li>
    <li><a href="#">Shipping & Returns</a></li>
    <li><a href="#">Shoe Care</a></li>
    <li><a href="#">Size Chart</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</footer>

        </div>
  )
}

export default Footer
