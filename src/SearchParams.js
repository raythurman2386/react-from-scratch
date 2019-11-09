import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./hooks/useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Corydon, IN");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
