import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { add } from "./Redux/Cartslice";
import { useDispatch } from "react-redux";


const Electronics = () => {

    const [aedata, setAedata] = useState([])
    const dispatch = useDispatch();

    const Loader = async () => {

        const response = await fetch("https://fakestoreapi.com/products")
        const datae = await response.json();
        setAedata(datae);
    }

    const redata = aedata.filter((v) => {
        return (v.category === "electronics")
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
                    redata.map((v, i) => {
                        return (
                            <>

                                <div className="box" key={v.id}>

                                    <img src={v.image} alt="" />
                                    <h3>{v.title}</h3>
                                    <strong><p>Price: {v.price} $</p></strong>
                                    {/* <p className="desc">{v.description}</p> */}
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

export default Electronics;