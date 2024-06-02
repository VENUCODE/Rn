import JobCategoryList from "./JobCategoryList";
import JobPostList from "./JobPostList";

const JobsLanding = () => {
  return (
    <div className="container d-flex flex-column gap-5">
      <div>Image Carousel</div>
      <div>
        <JobCategoryList />
      </div>
      <div>
        <JobPostList />
      </div>
      <div>
        <JobPostList title="Suggestions for you" />
      </div>
    </div>
  );
};

export default JobsLanding;
