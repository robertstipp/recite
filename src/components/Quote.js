import classes from "./Quote.module.css";

const text = {
  quote:
    "I continue uninjured, neither terrified by the present, nor in fear of the future.",
  author: "Marcus Aurelius",
};

const Quote = (props) => {
  return (
    <div className={classes.quote}>
      <h1>{text.quote}</h1>
      <h4>{text.author}</h4>
    </div>
  );
};

export default Quote;
