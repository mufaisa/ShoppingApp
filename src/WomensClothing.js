import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { add } from "./Redux/Cartslice";


const WomensClothing = () => {

    const [awdata, setAwdata] = useState([])
    const dispatch = useDispatch();

    const Loader = async () => {

        const resp = await fetch("https://fakestoreapi.com/products")
        const dataa = await resp.json();
        setAwdata(dataa);
    }

    const rwdata = awdata.filter((v) => {
        return (v.category === "women's clothing")
    })

    useEffect(() => {
        Loader()
    }, [])

    const Add = (product) => {
        dispatch(add(product))
    }


    return (
        <>
            <Navbar />
            <br />
            <h1>Products</h1>
            <br />
            <br />

            <div className="products">
                {
                    rwdata.map((v, i) => {
                        return (
                            <>

                                <div className="box" key={v.id}>

                                    <img src={v.image} alt="" />
                                    <h3>{v.title}</h3>
                                    <strong><p>Price: {v.price} $</p></strong>

                                    <strong><p>{v.category}</p></strong>

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

export default WomensClothing;