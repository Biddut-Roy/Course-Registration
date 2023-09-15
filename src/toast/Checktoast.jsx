import PropTypes from 'prop-types';

const Checktoast = ({showToast ,hourRemainingToast ,addTotalRemaining}) => {

    return (
    <div className="flex flex-col items-end justify-end ">
      {showToast && (
        <div className="mt-4 p-4 bg-orange-300 text-black rounded shadow-md">
          already select a data , please try another data
        </div>
      )}
      {hourRemainingToast && (
        <div className="mt-4 p-4 bg-red-300 text-black rounded shadow-md">
          Your stay time to long , please clear and add again
        </div>
      )}
      {addTotalRemaining && (
        <div className="mt-4 p-4 bg-red-300 text-black rounded shadow-md">
          Your stay time to long , please clear and add again
        </div>
      )}
    </div>
  );
};

Checktoast.propTypes = {
    showToast: PropTypes.bool.isRequired,
    hourRemainingToast: PropTypes.bool.isRequired,
    addTotalRemaining: PropTypes.bool.isRequired
}

export default Checktoast;