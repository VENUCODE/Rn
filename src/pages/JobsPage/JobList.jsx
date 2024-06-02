import { Pagination } from "@mui/material";
import JobPost from "./JobPost";
const JobList = () => {
  return (
    <>
      <div className="container d-flex flex-column gap-4 justify-content-between">
        <div className="d-flex gap-1 flex-column ">
          <JobPost />
          <JobPost />
          <JobPost />
          <JobPost />
          <JobPost />
          <JobPost />
          <JobPost />
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center my-2">
          <Pagination count={9} />
        </div>
      </div>
    </>
  );
};

export default JobList;
