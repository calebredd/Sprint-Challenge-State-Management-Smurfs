import React from "react";
import { connect } from "react-redux";
import { getSmurf, postSmurf } from "../action/";
import "./App.scss";
function SmurfForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    const smurfData = {
      name: e.target.name.value,
      age: Number(e.target.age.value),
      height: e.target.height.value + "cm",
      // id: Number(e.target.id.value)
      // id: Date.now()
    };
    // console.log(e.target);
    // console.log(e.target.name.value);
    // console.log(e.target.age.value);
    // console.log(e.target.height.value + "cm");
    // console.log(e.target.id.value);
    props.postSmurf(smurfData);
    // console.log(smurfData);
    e.target.reset();
  };

  return (
    <div>
      {/* <form action="https://localhost:3333/smurfs" method="post"> */}
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="name" placeholder="smurf name" required />
        <br />
        <input type="number" name="age" placeholder="smurf age" required />{" "}
        years
        <br />
        <input
          type="number"
          name="height"
          placeholder="smurf height"
          required
        />{" "}
        cm
        <br />
        {/* <input type="hidden" name="id" value={Date.now()} /> */}
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
// export default SmurfForm;
export default connect(
  mapStateToProps,
  { getSmurf, postSmurf }
)(SmurfForm);
