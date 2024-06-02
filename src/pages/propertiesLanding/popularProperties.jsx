import PropertyCard from "./propertyCard";

const PopularProperties = () => {
  return (
    <div>
      <h4 className="poppins-semibold mb-4 pt-3">Popular Properties</h4>

      <div className="scroll-container d-flex gap-2">
        <PropertyCard />
        <PropertyCard isNew={true} />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default PopularProperties;
