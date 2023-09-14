import { useState } from "react";
import Cart from "./cart/Cart";
import { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";


const Component = () => {

    const [crouchData ,setCrouchData] = useState([]);

    useEffect(() => {

        fetch('Crouch.json')
        .then(res => res.json())
        .then(data => setCrouchData(data))
        

    },[])
    return (
        <div>
            <div className=" flex w-[96%] mx-auto gap-2">
                
            <div className=" w-[75%] border-solid border-2 grid grid-cols-3 gap-4">
                {
                    crouchData.map((item,i )=> <Cart key={i} item={item}></Cart> )
                }
                </div>
                <div className=" w-[20%] mx-auto bg-slate-50">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Component;