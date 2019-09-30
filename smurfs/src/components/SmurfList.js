import React from 'react'

export default function SmurfList(props) {
  return (
    <div>
      {props.smurfs.map(smurf => (
        <p className="smurf" id={smurf.id} key={smurf.id}>
          {smurf.name} is {smurf.age} years old and {smurf.height} tall.
          </p>
      ))}
    </div>
  )
}
