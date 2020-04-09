//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

function App() {

  const homeInitialState = 0;
  const [home, setScoreHome] = useState(homeInitialState);
  const awayInitialState = 0;
  const [away, setScoreAway] = useState(awayInitialState);
  const inningInitialState = 1;
  const [inning, setInning] = useState(inningInitialState);
  const ballsInitialState = "";
  const [balls, setBalls] = useState(ballsInitialState);
  const strikesInitialState = "";
  const [strikes, setStrikes] = useState(strikesInitialState);
  const outsInitialState = "";
  const [outs, setOuts] = useState(outsInitialState);

  const addYankeesRun = () => {
    setScoreHome(home + 1);
    setBalls(ballsInitialState);
    setStrikes(strikesInitialState);
  };
  const addGuestRun = () => {
    setScoreAway(away + 1);
    setBalls(ballsInitialState);
    setStrikes(strikesInitialState);
  };
  const addInning = () => setInning(inning + 1);
  const addBalls = () => {
    if (balls === "***") {
      setBalls(ballsInitialState);
    } else {
      setBalls(balls + "*");
    }
  };
  const addStrikes = () => {
    if (strikes === "**") {
      setStrikes(strikesInitialState);
      addOuts();
    } else {
      setStrikes(strikes + "*");
    }
  };
  const addOuts = () => {
    if (outs === "**") {
      setOuts(outsInitialState);
      setStrikes(strikesInitialState);
      setBalls(ballsInitialState);
    } else {
      setOuts(outs + "*");
    }
  };
  const resetAll = () => {
    setScoreHome(homeInitialState);
    setScoreAway(awayInitialState);
    setBalls(ballsInitialState);
    setInning(inningInitialState);
    setStrikes(strikesInitialState);
    setOuts(outsInitialState);
  };

  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Yankees</h2>


            <div className="home_score">{home}</div>
          </div>
          <div className="inn">
            <h2 className="inning">Inning</h2>
            <div className="current_inning">{inning}</div>
          </div>
          <div className="away">
            <h2 className="away__name">Guest</h2>
            <div className="away_score">{away}</div>
          </div>
        </div>
        <div className="bottomRow">
      <div className="balls">
        <h3 className="balls_title">Balls</h3>
        <div className="balls_value">{balls}</div>
      </div>
      <div className="strikes">
        <h3 className="strikes_title">Strikes</h3>
        <div className="strikes_value">{strikes}</div>
      </div>
      <div className="outs">
        <h3 className="outs_title">Outs</h3>
        <div className="outs_value">{outs}</div>
      </div> 
    </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__run" onClick={addYankeesRun}>Yankees Score a Run</button>
          <button className="innings_button" onClick={addInning}>Next Inning</button>
          <button className="balls_button" onClick={addBalls}>Ball Thrown</button>
          <button className="strike_button" onClick={addStrikes}>Strike Thrown</button>
          <button className="out_button" onClick={addOuts}>Current Outs</button>
          <button className="awayButtons__run" onClick={addGuestRun}>Guest Score a Run</button>
        </div>
        <div className="awayButtons">
          <button className="reset_button" onClick={() => resetAll()}>Reset All</button>
        </div>
      </section>
    </div>
  );
}

export default App;
