import { useState } from "react";
import Cart from "./cart/Cart";
import { useEffect } from "react";


const Component = () => {

    const [data ,setData] = useState([]);

    useEffect(() => {

        fetch('Crouch.json')
        .then(res => res.json())
        .then(data => setData(data))
        

    },[])
    return (
        <div>
                {
                    data.map((item,i )=> <Cart key={i} item={item}></Cart> )
                }
        </div>
    );
};

export default Component;