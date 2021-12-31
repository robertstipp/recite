import React from "react";

// CSS
import "./index.css";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

const Quote = (props) => {
  return (
    <div className="quote">
      <h1>
        Regain your senses, call yourself back, and once again wake up. Now that
        you realize only dreams were troubling you, view this "reality" as you
        view your dreams.
      </h1>
      <h4>- Marcus Aurelius -</h4>
    </div>
  );
};

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
