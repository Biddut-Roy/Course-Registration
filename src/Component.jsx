import { useState } from "react";
import Cart from "./cart/Cart";
import { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Checktoast from "./toast/Checktoast";


const Component = () => {

    const [crouchData ,setCrouchData] = useState([]);
    const [ selectData , setClickData] = useState([]);
    const [hourRemaining , setHourRemaining] = useState(20);
    const [total ,setTotal] = useState(0);
    const [price , setPrice] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const [hourRemainingToast ,setHourRemainingToast] = useState(false)
    const [addTotalRemaining ,setAddTotalRemaining] = useState(false)
    
    useEffect(() => {

        fetch('Crouch.json')
        .then(res => res.json())
        .then(data => setCrouchData(data))
    },[])

    const selectBtn = (selectedItem) =>{
            const findData = selectData.find(findId => findId.id == selectedItem.id)
            const remainHour = selectedItem.credit;
            const totalCreditHour = selectedItem.credit;
            setTotal(totalCreditHour)
            
            if (findData) {
                // alert(' already select a data , please try another data')
                setShowToast(true);
                // Hide the toast after 3 seconds (adjust as needed)
                setTimeout(() => {
                setShowToast(false);
                }, 3000);
                
            }else{
                const totalHour = hourRemaining - remainHour ;
                if (totalHour < 0) {
                    // alert('Your stay time to long , please clear and add again')
                    setHourRemainingToast(true);
                    // Hide the toast after 3 seconds (adjust as needed)
                    setTimeout(() => {
                    setHourRemainingToast(false);
                    }, 3000);
                }else{
                    const addTotal = total + totalCreditHour;
                    if (addTotal > 20) {
                        // alert('your credit time cannot upper then 20hr')
                        setAddTotalRemaining(true);
                    // Hide the toast after 3 seconds (adjust as needed)
                        setTimeout(() => {
                            setAddTotalRemaining(false);
                        }, 3000);
                    }else(
                        setTotal(addTotal)
                        
                    )
                    setHourRemaining(totalHour)
                    setClickData([...selectData , selectedItem])
                    const totalPrices = price + selectedItem.price;
                    setPrice(totalPrices)
                    
                }

               
            }
        
   

        
    }
    return (
        <div>
            
            <Checktoast  showToast={showToast} hourRemainingToast={hourRemainingToast} addTotalRemaining={addTotalRemaining}/>
            <div className=" flex w-[96%] mx-auto gap-2">
            
            <div className="  lg:w-[75%] grid lg:grid-cols-3 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4">
                {
                    crouchData.map((item,i )=> <Cart key={i} item={item} selectBtn={selectBtn}></Cart> )
                }
                </div>
                <div className=" lg:w-[20%] mx-auto bg-slate-50 rounded-2xl">
                   <Sidebar selectData={selectData}  hourRemaining={hourRemaining} total={total} price={price}/>
                </div>
            </div>
        </div>
    );
};

export default Component;