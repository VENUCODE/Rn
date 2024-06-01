const PropertyCard = ({ isNew = false }) => {
  return (
    <div className="p-card d-flex flex-column">
      <div className="new-arrival">
        {isNew && <div className="poppins-medium">New Arrival</div>}
      </div>
      <div className="d-flex flex-row gap-4 p-4 ps-5">
        <div className="p-image ">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="p Image"
          />
        </div>
        <div className="d-flex flex-column gap-0  p-0 ">
          <p
            className="text-hide  m-0 p-0 p-name poppins-medium p-name"
            style={{ width: "12ch" }}
          >
            LansumElenasdfasdfasdfasdfasdfasdfasd
          </p>
          <p
            style={{ width: "18ch" }}
            className="text-hide m-0 p-0 p-location poppins-light"
          >
            Kokapet, Hyderabad sdfasdf
          </p>
          <p className="text-hide m-0 p-0 p-price poppins-medium">
            ₹1.16 - 3.02 cr
          </p>
        </div>
      </div>
      <div className="p-number pt-2 pb-4 pe-4 w-100  d-flex justify-content-end">
        <a
          href="#"
          className="view-number  py-2 px-4 rounded-3 poppins-medium "
        >
          View Number
        </a>
      </div>
    </div>
  );
};
export default PropertyCard;
