import PropTypes from 'prop-types';

const Sidebar = ({ selectData , hourRemaining, total , price}) => {
  return (
    <div>
      <div className="pl-3 pr-3">
        <p className="text-blue-500 font-medium md:font-bold lg:font-bold text-sm md:text-xl lg:text-xl my-0 md:my-5 lg:my-6 border-solid border-b-2">Credit Hour Remaining {hourRemaining} hr</p>
        <h2 className=" font-medium md:font-bold lg:font-bold text-base md:text-2xl lg:text-2xl">Course Name</h2>
        <ul className="mt-2 pl-3">
          {selectData.map(element => (
            <li className="list-decimal" key={element.id}>{element["crouch-name"]}</li>
          ))}
        </ul>
        <div className="my-3">
          <h1 className="font-normal border-solid border-2 py-2">Total Credit Hour:{total}</h1>
        </div>
        <p className=" md:text-base lg:text-base font-normal md:font-medium lg:font-medium">Total Price: {price} USD</p>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  hourRemaining: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Sidebar;
