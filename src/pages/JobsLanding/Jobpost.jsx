import { MdLocationOn, MdOutlineFileUpload } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
const JobPost = () => {
  return (
    <div className="job-post">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="company logo"
        />
      </div>
      <div className="content">
        <p className="job-title  poppins-medium">Fullstack developer</p>
        <p className="company-name poppins-light">company Name</p>
        <p className="job-location poppins-light text-capitalize">
          <MdLocationOn color="black" size={15} className="me-1" />
          <span>location</span>
        </p>
        <p className="job-location poppins-light">
          <IoMdBriefcase color="black" className="me-1" />
          <span>Experience</span>
        </p>
        <p className="time-ago poppins-light">
          <span> Posted 12 days ago</span>
          <span>
            <FaRegHeart color="black" size={20} className="me-2 c-pointer" />
            <MdOutlineFileUpload
              color="black"
              size={25}
              className="c-pointer"
            />
          </span>
        </p>
      </div>
    </div>
  );
};
export default JobPost;
