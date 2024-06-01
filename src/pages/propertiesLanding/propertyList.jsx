import PropertyCard from "./propertyCard";

const PropertyList = () => {
  return (
    <div>
      <h4 className="poppins-semibold mb-4 pt-3">Recently added Properties</h4>

      <div className="container-fluid d-flex gap-2">
        <PropertyCard isNew={true} />
        <PropertyCard isNew={true} />
        <PropertyCard isNew={true} />
        <PropertyCard isNew={true} />
      </div>
    </div>
  );
};

export default PropertyList;
