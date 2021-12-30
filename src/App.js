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
        If the rain is the worst thing that happens to you today, you have a
        pretty awesome life.
      </h1>
      <h4>J.B.</h4>
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
