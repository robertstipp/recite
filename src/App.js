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
        I like it when it rains, because even if i don't like it, it still
        rains.
      </h1>
      <h4>jb.</h4>
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
