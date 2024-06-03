import PropertyCard from "./PropertyCard";
import CustomPagination from "./CustomPagination";
const PropertyList = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <div className="vertical-scroll container gap-2 d-flex flex-column">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="w-100 d-flex justify-content-end py-1">
        <CustomPagination />
      </div>
    </div>
  );
};

export default PropertyList;
