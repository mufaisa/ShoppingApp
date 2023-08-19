import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { add } from "./Redux/Cartslice";


const Jewelery = () => {

    const [jdata, setJdata] = useState([])
    const dispatch = useDispatch();

    const Loader = async () => {

        const respp = await fetch("https://fakestoreapi.com/products")
        const dataj = await respp.json();
        setJdata(dataj);
    }

    const jeweldata = jdata.filter((v) => {
        return (v.category === "jewelery")
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
                    jeweldata.map((v, i) => {
                        return (
                            <>

                                <div className="box" key={v.id}>

                                    <img src={v.image} alt="" />
                                    <h3>{v.title}</h3>
                                    <strong><p>Price: {v.price}</p></strong>
                                    <p className="desc">{v.description}</p>
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

export default Jewelery;