import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="nav">
            <h2 className="links">Wonka's Chocolate Factory</h2>
            <Link className="links" to="/">Shop</Link>
        </nav>
    );
};

export default Navbar;