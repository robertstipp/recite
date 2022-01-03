import React from "react";

// CSS
import "./index.css";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

const Quote = (props) => {
  return (
    <div className="quote">
      <h1>We suffer more often in imagination than in reality.</h1>
      <h4>- Seneca -</h4>
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
