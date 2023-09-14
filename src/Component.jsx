import { useState } from "react";
import Cart from "./cart/Cart";
import { useEffect } from "react";


const Component = () => {

    const [crouchData ,setCrouchData] = useState([]);

    useEffect(() => {

        fetch('Crouch.json')
        .then(res => res.json())
        .then(data => setCrouchData(data))
        

    },[])
    // console.log(crouchData)
    return (
        <div>
                <div className=" w-[75%] border-solid border-2 grid grid-cols-3 gap-4">
                {
                    crouchData.map((item,i )=> <Cart key={i} item={item}></Cart> )
                }
                </div>
        </div>
    );
};

export default Component;