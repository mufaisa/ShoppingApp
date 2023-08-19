import { useEffect, useState } from "react";
import "./Home.css"
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { add } from "./Redux/Cartslice";

const Home = () => {

    const [pData, setPdata] = useState([])

    const dispatch = useDispatch();

    const Loader = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        setPdata(data);

        console.log(data);
        console.log(pData);

    }

    const Add = (product) => {
        dispatch(add(product))
    }

    useEffect(() => {
        Loader();
    }, [])

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Shopping Zone</h1>

            <div className="products">
                {
                    pData.map((v, i) => {
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

                                    <div className="btns">
                                        <button className="add" onClick={() => Add(v)}>Add to Cart</button>
                                    </div>

                                </div>
                                <br />
                                <br />
                                <br />

                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Home;