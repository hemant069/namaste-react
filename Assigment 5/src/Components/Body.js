import { useState } from "react";
import { restautantCard } from "../../contains/contain";
import Restaurant from "./Restaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(restautantCard);
  const [istoggle, setisToggle] = useState("false");

  const Filter = (searchText, restaurant) => {
    const filterdata = restaurant.filter((el) => {
      return el?.info?.name?.includes(searchText);
    });
    // return filterdata;
    return filterdata;
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          id=""
        />
        <button onClick={() => setRestaurant(Filter(searchText, restaurant))}>
          Search
        </button>
      </div>
      <h1>{istoggle}</h1>
      <button
        onClick={() => {
          if (istoggle === "false") {
            setisToggle("true");
          } else {
            setisToggle("false");
          }
        }}
      >
        Toggle
      </button>
      <div className="cards">
        {restaurant.map((restaurants, index) => (
          <Restaurant key={index} {...restaurants.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
