import { Avatar } from "@mui/material";
import { BsPersonSquare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
const PropertyCard = () => {
  return (
    <div className="property-card  rounded-0 p-2">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ objectFit: "cover", height: "178px" }}
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid "
            alt="Property"
          />
        </div>
        <div className="col-md-8 ps-2">
          <div className="card-body py-0">
            <p className="card-title text-color fs-title poppins-medium my-0 w-100 d-flex justify-content-between aling-items center">
              2 BHK Apartment Rain Tree Park
              <span>
                {" "}
                <FaRegHeart className="text-color c-pointer me-2" size={20} />
                <IoShareSocialSharp
                  className="text-color c-pointer"
                  size={20}
                />
              </span>
            </p>
            <p className="card-text poppins-regular fs-small text-pale my-0">
              Nagarjuna Nagar, Guntur, Guntur District
            </p>
            <div className="d-flex justify-content-between bg-pale p-3 rounded-1 m-1 ms-0 ">
              <div>
                <h6 className="card-subtitle text-color poppins-bold fs-5">
                  29.12 L
                </h6>
                <p className="card-text">
                  <small className="text-muted poppins-regular text-small">
                    3200 / Sq.feet
                  </small>
                </p>
              </div>
              <div>
                <h6 className="card-subtitle text-color poppins-bold fs-5">
                  900
                </h6>
                <p className="card-text">
                  <small className="text-muted poppins-regular text-small">
                    Area in Sq.feet
                  </small>
                </p>
              </div>
              <div>
                <h6 className="card-subtitle text-color poppins-bold fs-5">
                  Ready to move
                </h6>
                <p className="card-text">
                  <small className="text-muted poppins-regular text-small">
                    Construction Status
                  </small>
                </p>
              </div>
            </div>
            <p>
              <small className="text-muted fs-small poppins-regular">
                1 year old | New
              </small>
              <p className="fs-tiny text-pale poppins-regular">
                2 BHK in Nagarjuna Nagar, Guntur: This spacious 2 bhk listorey
                apartment...
              </p>
            </p>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className=" d-flex justify-content-between align-items-center px-2 py-0 my-0">
            <div
              className="d-flex align-items-start  justify-content-between p-0 m-0  w-100"
              style={{ maxWidth: "33%" }}
            >
              <div className="d-flex flex-row justify-content-start align-items-center  w-100">
                <div className="me-2">
                  <Avatar sx={{ bgcolor: "#225770" }}>R</Avatar>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <span className="text-color poppins-medium fs-5">
                    RKK Builders
                  </span>
                  <span className="text-pale poppins-light fs-tiny">
                    Builder
                  </span>
                </div>
              </div>
              <BsPersonSquare className="text-color fs-medium" />
            </div>
            <button
              className="btn rounded-0  poppins-medium py-1 px-2 fs-medium text-white my-0"
              style={{ background: "#225770" }}
            >
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
