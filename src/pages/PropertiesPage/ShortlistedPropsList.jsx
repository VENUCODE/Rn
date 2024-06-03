import ShortProperties from "./ShortProperties";
const ShortListedProperties = () => {
  return (
    <div className="contianer-fluid d-flex flex-column gap-2 px-1">
      <ShortProperties />
      <div className="img-container d-flex flex-column gap-2">
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="p Image"
          style={{ height: "200px", objectFit: "cover" }}
          className="img-fluid flex-grow-1 "
        />
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="p Image"
          style={{ height: "150px", objectFit: "cover" }}
          className="img-fluid flex-grow-0"
        />
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="p Image"
          style={{ height: "150px", objectFit: "cover" }}
          className="img-fluid flex-grow-0"
        />
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="p Image"
          style={{ height: "200px", objectFit: "cover" }}
          className="img-fluid flex-grow-1"
        />
      </div>
    </div>
  );
};

export default ShortListedProperties;
