import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { getSmurf, postSmurf } from "../action/";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
function App(props) {
  // console.log(props.state);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfForm />
      <h2>
        Smurf Roster <button onClick={() => props.getSmurf()}>Update</button>
      </h2>
      <div className="smurfs">
        <SmurfList  smurfs={props.state.smurfs} />
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
