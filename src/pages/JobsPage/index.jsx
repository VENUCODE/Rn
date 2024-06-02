import { Grid } from "@mui/material";
import JobFilters from "./jobFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import JobList from "./JobList";
import "./jobStyles.css";
import JobsThumbnail from "./JobsThumbnail";
const JobListingPage = () => {
  return (
    <div className="container px-1">
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <JobFilters />
        </Grid>
        <Grid item xs={7}>
          <JobList />
        </Grid>
        <Grid item xs={3}>
          <JobsThumbnail />
        </Grid>
      </Grid>
    </div>
  );
};

export default JobListingPage;
