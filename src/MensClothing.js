import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { add } from "./Redux/Cartslice";


const MensClothing = () => {

    const [adata, setAdata] = useState([])

    const dispatch = useDispatch();

    const Loader = async () => {

        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        setAdata(data);
    }

    const rdata = adata.filter((v) => {
        return (v.category === "men's clothing")
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
                    rdata.map((v, i) => {
                        return (
                            <>

                                <div className="box" key={v.id}>

                                    <img src={v.image} alt="" />
                                    <h3>{v.title}</h3>
                                    <strong><p>Price: {v.price} $</p></strong>
                                    <strong><p>{v.category}</p></strong>

                                    <div className="btns">
                                        <button className="add" onClick={()=>Add(v)}>Add to Cart</button>
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

export default MensClothing;