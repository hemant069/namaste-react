const Restaurant = ({ id, cloudinaryImageId, name, avgRating, cuisines }) => {
  //console.log(props.restaurants?.card?.card?.imageGridCards);

  //const { card } = restaurants;

  const cloudImageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="card">
      <img src={cloudImageUrl + cloudinaryImageId} alt={cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>Rating {avgRating}</h5>
      <h6>{cuisines?.join(", ")}</h6>
    </div>
  );
};

export default Restaurant;
