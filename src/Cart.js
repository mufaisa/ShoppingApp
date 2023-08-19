import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { remove, removeAll } from "./Redux/Cartslice";


const Cart = () => {

    const citems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const del = (k) => {
        dispatch(remove(k))
    }

    const Empty = () => {
        if (citems.length === 0) {
            alert("Cart is already empty")
        }
        else {

            if (window.confirm("Clearing Cart")) {
                dispatch(removeAll())
            }
        }
    }

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Cart</h1>
            <button className="add" onClick={Empty}>Empty Cart</button>
            <br />
            <br />

            <div className="products">
                {
                    citems.map((v, i) => {
                        return (
                            <>

                                <div className="box" key={v.id}>

                                    <img src={v.image} alt="" />
                                    <h3>{v.title}</h3>
                                    <br />
                                    <strong><p>Price: {v.price} $</p></strong>
                                    <br />
                                    <strong><p>{v.category}</p></strong>
                                    <br />
                                    <br />
                                    <button className="add" onClick={() => del(i)}>Delete</button>

                                </div>

                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Cart;