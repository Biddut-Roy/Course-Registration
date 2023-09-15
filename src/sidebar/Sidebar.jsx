import PropTypes from 'prop-types';

const Sidebar = ({ selectData , hourRemaining }) => {
  return (
    <div>
      <div className="pl-3">
        <p className="text-blue-500 font-bold text-xl my-6 border-solid border-b-2">Credit Hour Remaining {hourRemaining} hr</p>
        <h2 className="font-bold text-2xl">Course Name</h2>
        <ul className="mt-2 pl-3">
          {selectData.map(element => (
            <li className="list-decimal" key={element.id}>{element["crouch-name"]}</li>
          ))}
        </ul>
        <div className="my-3">
          <h1 className="font-normal border-solid border-2 py-2">Total Credit Hour: 13</h1>
        </div>
        <p className="text-base font-medium">Total Price: 48000 USD</p>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  selectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  hourRemaining: PropTypes.string.isRequired,
};

export default Sidebar;
