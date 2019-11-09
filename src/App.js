import React from "react";

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Layla" animal="Dog" breed="Pit" />
      <Pet name="Zeus" animal="Dog" breed="Pit" />
      <Pet name="Lillith" animal="Cat" breed="Black Cat" />
    </div>
  );
};

export default App;
