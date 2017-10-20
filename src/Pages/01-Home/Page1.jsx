import React from 'react'

export default class extends React.Component {
  state = { name: "", show: false }

  exe1 = () => {
    console.log(this.state.name)
    this.setState({ show: true })

    setTimeout( () => { this.setState({ show: false, name: "" }) } , 3000 )
  }

  exe2 = () => {
    return(  <div>{ this.state.name }</div> )
  }

  render() {
    return(
      <div>
        <div><strong>Add Player Name:</strong></div>

        <form onSubmit={this.exe1}>
            <input type="text" placeholder="type plaher's name."
             value={this.state.name}
             onChange={ (eve) => { this.setState({ name: eve.target.value }) } }  />
        </form>

        <button onClick={ this.exe1 } >Add Player</button>

        <p><strong>Players</strong></p>
        { this.state.show ? React.createElement(this.exe2) : <div>Player's Name goes here.</div> } <br/>

      </div>
    )
  }
}
