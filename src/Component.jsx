import { useState } from "react";
import Cart from "./cart/Cart";
import { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";


const Component = () => {

    const [crouchData ,setCrouchData] = useState([]);
    const [ selectData , setClickData] = useState([]);
    const [hourRemaining , setHourRemaining] = useState(20)

    useEffect(() => {

        fetch('Crouch.json')
        .then(res => res.json())
        .then(data => setCrouchData(data))
    },[])

    const selectBtn = (selectedItem) =>{
            const findData = selectData.find(findId => findId.id == selectedItem.id)
            const remainHour = selectedItem.credit;

            if (findData) {
                alert(' allready select a data , please try another data')
            }else{
                setClickData([...selectData , selectedItem])
                const totalHour = hourRemaining - remainHour ;
                if (totalHour < 0) {
                    alert(' Your time is gone')
                }else{
                    setHourRemaining(totalHour)
                }
            }
        
   

        
    }
    return (
        <div>
            <div className=" flex w-[96%] mx-auto gap-2">
                
            <div className=" w-[75%] border-solid border-2 grid grid-cols-3 gap-4">
                {
                    crouchData.map((item,i )=> <Cart key={i} item={item} selectBtn={selectBtn}></Cart> )
                }
                </div>
                <div className=" w-[20%] mx-auto bg-slate-50">
                   <Sidebar selectData={selectData}  hourRemaining={hourRemaining}/>
                </div>
            </div>
        </div>
    );
};

export default Component;