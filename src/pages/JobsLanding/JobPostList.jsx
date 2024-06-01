import JobPost from "./Jobpost";
const JobPostList = () => {
  return (
    <div>
      <h4 className="poppins-semibold">Recently added jobs</h4>
      <div className="container-fluid gap-4">
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
      </div>
    </div>
  );
};
export default JobPostList;
