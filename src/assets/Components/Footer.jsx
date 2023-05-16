import './Style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerr' >
    

    <footer style={{display:'flex',justifyContent:'space-around'}}>
  <ul  >
  <h1>Shop</h1>

    <Link to="/men" ><li>Shop Men</li></Link>
    <Link to="/women" ><li>Shop Women</li></Link>
    <li>Lookbook</li>
    <li>Gift Card</li>
    <li>Sale</li>
  </ul>

  <ul>
  <h1>About</h1>

    <li>Our Story</li>
    <li>Our Materials</li>
    <li>Our Value</li>
    <li>Sustainability</li>
    <li>Manufacture</li>
  </ul>

  <ul>
  <h1>Need Help?</h1>

    <li>FAQs</li>
    <li>Shipping & Returns</li>
    <li>Shoe Care</li>
    <li>Size Chart</li>
    <li>Contact Us</li>
  </ul>
</footer>

        </div>
  )
}

export default Footer
