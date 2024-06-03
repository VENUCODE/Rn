import { Grid } from "@mui/material";
import "./style.css";
import PropertyList from "./PropertyList";
import ImageCarousel from "../../components/ImageCarousel";
const PropertiesPage = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <PropertyList />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={12}>
          <ImageCarousel />
        </Grid>
      </Grid>
    </div>
  );
};
export default PropertiesPage;
