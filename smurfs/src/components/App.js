import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { getSmurf, postSmurf } from "../action/";
import SmurfForm from "./SmurfForm";
function App(props) {
  // console.log(props.state);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {/* <p>
        {props.state.name} is {props.state.age} years old and{" "}
        {props.state.height} tall. He's the real OG Smurf
      </p> */}
      <SmurfForm />
      <button onClick={() => props.getSmurf()}>Get Smurfs</button>
      <div className="smurfs">
        {props.state.smurfs.map(smurf => (
          <p className="smurf" id={smurf.id} key={smurf.id}>
            {smurf.name} is {smurf.age} years old and {smurf.height} tall.
          </p>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
// export default App;
export default connect(
  mapStateToProps,
  { getSmurf, postSmurf }
)(App);
