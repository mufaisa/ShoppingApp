import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {

const items = useSelector((state)=>state.cart);

    return (
        <>
            <div className="boxn">

                <ul>
                    <li><NavLink to="/cart">Cart: {items.length} items</NavLink></li>
                    <br />
                    <li><NavLink to="/mensclothing">Men's clothing</NavLink></li>
                    <br />
                    <li><NavLink to="/womensclothing">Women's clothing</NavLink></li>
                    <br />
                    <li><NavLink to="/electronics">Electronics</NavLink></li>
                    <br />
                    <li><NavLink to="/jewelery">Jewelery</NavLink></li>
                    <br />
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;