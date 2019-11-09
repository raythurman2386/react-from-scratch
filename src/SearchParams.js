import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Corydon, IN");

  return (
    <div>
      <form>
        <h1>{location}</h1>
        <label htmlFor="location">
          Location
          <input
            placeholder="Location"
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
