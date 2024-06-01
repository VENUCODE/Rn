import { Grid } from "@mui/material";
import { MdLocationOn, MdOutlineFileUpload } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
const JobPost = () => {
  return (
    <Grid container className="job-filtered rounded-2 py-2">
      <Grid item xs={1.5}>
        <div className="image h-100 w-100 ps-3 pt-1 ">
          <img
            style={{
              objectFit: "cover",
              borderRadius: "0.3rem",
            }}
            alt="img"
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid"
          />
        </div>
      </Grid>
      <Grid item xs={10.5}>
        <div className="poppins-semibold text-capitalize w-100 d-flex justify-content-between pe-4">
          {" "}
          <span>Full stack developer</span>
          <span className="d-flex flex-row gap-2 align-items-center justify-content-center ">
            <FaRegHeart color="black" size={20} className="me-2 c-pointer" />
            <MdOutlineFileUpload
              color="black"
              size={25}
              className="c-pointer"
            />
          </span>
        </div>
        <p
          className="poppins-light py-0 my-0 text-capitalize "
          style={{ fontSize: "12px" }}
        >
          Company Name
        </p>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className="d-flex w-100 gap-2">
              <p className="job-location poppins-light text-capitalize">
                <MdLocationOn color="black" size={15} className="me-1" />
                <span>location</span>
              </p>

              <p className="job-location poppins-light">
                <IoMdBriefcase color="black" size={15} className="me-1" />
                <span>8-12 Years</span>
              </p>
            </div>
            <p className="job-location poppins-light">
              <span>Posted 12 days Ago</span>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobPost;
