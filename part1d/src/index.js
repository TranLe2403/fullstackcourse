import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Buttons = ({ setGood, setNeutral, setBad, good, neutral, bad }) => (
  <div>
    <Button handleClick={() => setGood(good + 1)} text="Good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
    <Button handleClick={() => setBad(bad + 1)} text="Bad" />
  </div>
);

const Statistic = ({ text, value }) => (
  <tr>
    <td style={{ width: 80 }}>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, average, positive }) => (
  <table>
    <tbody>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={`${positive} %`} />
    </tbody>
  </table>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let average;
  let positive;

  if (good + neutral + bad === 0) {
    return (
      <div>
        <Title title="Give Feedback" />
        <Buttons
          setGood={setGood}
          good={good}
          setNeutral={setNeutral}
          neutral={neutral}
          setBad={setBad}
          bad={bad}
        />
        <Title title="Statistics" />
        <div>No feedback given</div>
      </div>
    );
  } else {
    average = (good - bad) / (good + neutral + bad);
    positive = (good / (good + neutral + bad)) * 100;

    return (
      <div>
        <Title title="Give Feedback" />
        <Buttons
          setGood={setGood}
          good={good}
          setNeutral={setNeutral}
          neutral={neutral}
          setBad={setBad}
          bad={bad}
        />
        <Title title="Statistics" />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          average={average}
          positive={positive}
        />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
