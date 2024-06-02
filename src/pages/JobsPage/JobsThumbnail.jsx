import { Grid, Skeleton } from "@mui/material";

const JobsThumbnail = () => {
  return (
    <div className="w-100 d-flex flex-column gap-3">
      <div
        className="w-100 bg-secondary-subtle rounded-2"
        style={{ height: "200px" }}
      ></div>
      <div
        className="w-100 bg-secondary-subtle rounded-2"
        style={{ height: "300px" }}
      >
        <p className="poppins-medium ps-2 pt-2">
          See other jobs in featured companies
        </p>
        <div>
          <Grid container className="px-3" spacing={2}>
            <Grid item xs={6}>
              <Skeleton height={50} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton height={50} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton height={50} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton height={50} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default JobsThumbnail;
