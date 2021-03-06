import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="nav">
            <h2 className="links">Wonka's Chocolate Factory</h2>
            <Link className="links" to="/">Shop</Link>
            <div className="right-nav">
                <Link className="login-btn" to="register">Register</Link>
                <div className="line"></div>
                <Link className ="login-btn" to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;