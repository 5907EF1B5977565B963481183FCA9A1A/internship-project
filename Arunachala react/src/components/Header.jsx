import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <div className="container1">
    <div className="logo">
      <img src="./assets/humeira logo.png" />
    </div>
    <div>
    <ul className="ul">
      <li className="li"><Link to="/" >Home</Link></li>
      <li className="li"><Link to="/products">Products</Link></li>
      <li className="li"><Link to="/Aboutus">About Us</Link></li>
      </ul>
    </div>
    
    <div>
      <p className="p1"><Link to="/login"  title="login">
    Login</Link>
      <Link to="/register"  title="register">
      <span>/Register</span></Link></p>
      
    </div>
    <div>
      <p className="p2"><span><i className="fa fa-user"></i></span></p>
    </div>
  </div>
    </div>
  )
}
