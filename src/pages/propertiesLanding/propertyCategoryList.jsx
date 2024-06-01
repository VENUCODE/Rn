import PropertyCategory from "./propertyCategory";

const PropertyCategoryList = () => {
  return (
    <div>
      <h4 className="poppins-semibold mb-4 pt-3">Category</h4>

      <div className="container-fluid d-flex gap-2">
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
        <PropertyCategory />
      </div>
    </div>
  );
};
export default PropertyCategoryList;
