import { Pagination } from "@mui/material";
import JobPost from "./JobPost";
const JobList = () => {
  return (
    <>
      <div className="container d-flex flex-column gap-1">
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <div className="w-100 d-flex justify-content-center align-items-center my-2">
          <Pagination count={9} />
        </div>
      </div>
    </>
  );
};

export default JobList;
