import JobPost from "./Jobpost";
const JobPostList = ({ title = "Recently added jobs" }) => {
  return (
    <div>
      <h4 className="poppins-semibold">{title}</h4>
      <div className="scroll-container gap-4">
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
