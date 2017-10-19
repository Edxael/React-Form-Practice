import React from 'react'

export default class extends React.Component {
  state = { name: "", show: false }

  exe1 = () => {
    console.log(this.state.name)
    this.setState({ show: true })

    setTimeout( () => { this.setState({ show: false, name: "" }) } , 3000 )
  }

  exe2 = () => {
    return(
      <div>{ this.state.name }</div>
    )
  }

  render() {
    return(
      <div>
        <h3>JavaScript Club</h3>


        <form onSubmit={this.exe1}>
          <div><strong>Sing Up</strong></div>
          <div>
            <input type="text" placeholder="type your name."
             value={this.state.name}
             onChange={ (eve) => { this.setState({ name: eve.target.value }) } }  />
          </div>

        </form>

        <div>
          <button onClick={ this.exe1 } >Add Player</button>
        </div>




        <p><strong>Players</strong></p>
        { this.state.show ? React.createElement(this.exe2) : <div>New Name goes here.</div> }

              <br/>

      </div>
    )
  }
}
