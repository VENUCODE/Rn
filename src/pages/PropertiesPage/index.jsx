import { Grid } from "@mui/material";
import "./style.css";
import PropertyList from "./PropertyList";
import ImageCarousel from "../../components/ImageCarousel";
import ShortListedProperties from "./ShortlistedPropsList";

const PropertiesPage = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid container item>
          <Grid item xs={8} className="equal-height">
            <PropertyList />
          </Grid>
          <Grid item xs={4} className="equal-height">
            <div className="container-fluid">
              <ShortListedProperties />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="w-100 d-flex justify-content-center align-items-center line-grad">
            <span className="poppins-medium px-3 py-1 text-small rounded-4 bg-title-gradient line-bg">
              YOUR <strong>HAPPINESS</strong> IS OUR <strong>SUCCESS</strong>
            </span>
          </div>
          <div className="container-fluid carousel-container px-1">
            <ImageCarousel />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertiesPage;
