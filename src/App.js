import React from "react";

import Quote from "./components/Quote";
import Card from "./components/Card";

// CSS
import "./index.css";




const App = () => {
  return (
    <div className="App">
      <Card>
        <Quote />
      </Card>
    </div>
  );
};

export default App;
