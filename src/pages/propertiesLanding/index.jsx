import PopularProperties from "./popularProperties";
import PropertyCategoryList from "./propertyCategoryList";
import PropertyList from "./propertyList";

const PropertyLanding = () => {
  return (
    <div className="container d-flex flex-column gap-4">
      <PropertyCategoryList />
      <PropertyList />
      <PopularProperties />
    </div>
  );
};
export default PropertyLanding;
