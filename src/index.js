import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const TRANSACTIONS = {
    Jan: [120, 200, 60, 20],
    Feb: [120, 200, 10],
    Mar: [120, 200, 70]
  };

  const calculateRewards = () => {
    const rewards = [];
    let grandTotal = 0;
    Object.keys(TRANSACTIONS).map(month => {
      let monthTotal = 0;
      TRANSACTIONS[month].map(num => {
        let temp = 0;
        if (num > 100) {
          temp += (num - 100) * 2;
          temp += 50;
        } else if (num > 50) {
          temp += num - 50;
        }
        monthTotal += temp;
        return null;
      });
      grandTotal += monthTotal;
      rewards.push({ [month]: monthTotal });
      return null;
    });
    rewards.push({ grandTotal });
    return rewards;
  };

  return (
    <div className="App">
      <h1>Total Rewards</h1>
      {calculateRewards().map(reward => {
        const month = Object.keys(reward)[0];
        return (
          <div>
            <p>{month}</p>
            <p>{reward[month]}</p>
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
