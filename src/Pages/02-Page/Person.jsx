import React from 'react'

export default class extends React.Component {
  render() {
    console.log(this.props.info.name);

    const myStl = { textAlign: "left", padding: "8px 20px", border: "2px solid black", margin: "6px 0px", backgroundColor: "rgb(245, 162, 120)" }
    return(
      <div style={myStl} >
        <div><strong>Name: </strong>{this.props.info.name}</div>
      </div>
    )
  }
}
