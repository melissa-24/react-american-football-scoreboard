//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const homeInitialState = 0;
  const [home, setScoreHome] = useState(homeInitialState);
  const awayInitialState = 0;
  const [away, setScoreAway] = useState(awayInitialState);
  const downsInitialState = 1;
  const [downs, setDowns] = useState(downsInitialState);
  const yardsToGoInitialState = 10;
  const [yardsToGo, setYardsToGo] = useState(yardsToGoInitialState);
  const yardsInitialState = 50;
  const [yards, setYards] = useState(yardsInitialState);
  const quartersInitialState = 1;
  const [quarters, setQuarters] = useState(quartersInitialState);

  const addHomeTouchdown = () => setScoreHome(home + 7);
  const addHomeFeildGoal = () => setScoreHome(home + 3);
  const addAwayTouchdown = () => setScoreAway(away + 7);
  const addAwayFeildGoal = () => setScoreAway(away + 3);
  const addDowns = () => {
    if (downs === 4) {
      setDowns(downsInitialState);
    } else {
      setDowns(downs + 1);
    }
   };
  const minusYardsToGo = () => {
    if (yardsToGo < 2) {
      setYardsToGo(yardsToGoInitialState);
      resetDowns();
    } else {
      setYardsToGo(yardsToGo - 1);
    }
  };
  const minusYards = () => {
    if (yards < 2) {
      setYards(yardsInitialState);
    } else {
      setYards(yards - 1);
    }
  };
  const addYards = () => {
    if(yards > 48) {
      setYards(yardsInitialState);
    } else {
      setYards(yards + 1);
    }
  };
  const addQuarters = () => {
    if (quarters === 4) {
      resetQuarters();
    } else {
      setQuarters(quarters + 1);
    }
  }
  const resetDowns = () => setDowns(downsInitialState);
  const resetQuarters = () => {
    setDowns(downsInitialState);
    setYards(yardsInitialState);
    setYardsToGo(yardsToGoInitialState);
    setQuarters(quartersInitialState);
  };
  const resetAll = () => {
    setScoreHome(homeInitialState);
    setScoreAway(awayInitialState);
    setDowns(downsInitialState);
    setYards(yardsInitialState);
    setYardsToGo(yardsToGoInitialState);
    setQuarters(quartersInitialState);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Patriots</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Saints</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{downs}</div>
          <button onClick={addDowns}>+</button>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">{yardsToGo}</div>
          <button onClick={minusYardsToGo}>-</button>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">{yards}</div>
          <button onClick={addYards}>+</button>
          <button onClick={minusYards}>-</button>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarters}</div>
          <button onClick={addQuarters}>+</button>
        </div>
      </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={addHomeTouchdown}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={addHomeFeildGoal}>
            Home Field Goal
          </button>
        </div>
        <div className="reset">
          <button className="reset_button" onClick={resetAll}>End Game</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={addAwayTouchdown}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={addAwayFeildGoal}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
