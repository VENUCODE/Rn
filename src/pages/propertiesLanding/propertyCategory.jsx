const PropertyCategory = () => {
  return (
    <div className="p-category-card rounded-2 d-flex justify-content-between flex-column">
      <div className="p-category-name-container p-2 text-capitalize">
        <span className="poppins-medium">category name</span>
      </div>
      <div className="p-category-img-container ">
        <img
          width={"100%"}
          src="https://th.bing.com/th/id/R.3f979a1d6f15430aacc8f130f4a2a13b?rik=X9kqj3L6HxcMOQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fBuilding-PNG-Image-Free-Download-1.png&ehk=CPqcHqXuH0qEYILKf%2f5ayMwM8OfOSU4pkL%2b%2fGzx0i9o%3d&risl=&pid=ImgRaw&r=0"
          alt="imgs"
        />
      </div>
    </div>
  );
};

export default PropertyCategory;
