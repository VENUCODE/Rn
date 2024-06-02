import JobCategory from "./JobCategory";

const JobCategoryList = () => {
  return (
    <div>
      <h4 className="poppins-semibold">Top trending Jobs</h4>
      <div className="scroll-container gap-4">
        <JobCategory />
        <JobCategory />
        <JobCategory />
        <JobCategory />
        <JobCategory />
        <JobCategory />
        <JobCategory />
        <JobCategory />
        <JobCategory />
        <JobCategory />
      </div>
    </div>
  );
};
export default JobCategoryList;
