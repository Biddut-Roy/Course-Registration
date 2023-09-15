import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs'; 

const Cart = ({item , selectBtn}) => {
    const { img, credit, details, price } = item;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className=" mt-4 px-5 lg:h-[270px] space-y-2 ">
                <h2 className=" truncate text-xl font-semibold">{item['crouch-name']}</h2>
                <p className=' flex-wrap lg:h-[130px]'>{details}</p>
                <div className=' flex justify-between'>
                    <h1 className=' flex items-center'><FaDollarSign />Price:{price}</h1>
                    <h1 className=' flex items-center'><span className='mx-2'><BsBook /></span>Credit:{credit}hr</h1>
                </div>
                <div className=" text-center">
                <button className="btn btn-primary px-20 py-0" onClick={()=> selectBtn(item)}>Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    item: PropTypes.object.isRequired,
    selectBtn: PropTypes.func.isRequired
 }

export default Cart;