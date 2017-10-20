import React from 'react'
import Person from './Person'


export default class extends React.Component {
  state = { name: "", show: false, db: [], onhold: "", all: false }


  exe1 = (eve) => {
    eve.preventDefault()
    this.setState({ db: this.state.db.concat([ this.state.name ]) })
    this.setState({ show: true })
    this.setState({ onhold: this.state.name })
    this.setState({ name: "" })

    setTimeout( () => { this.setState({ show: false }) } , 500 )
  }

  exe2 = () => {
    console.log("db: ", this.state.db);
    return (
      <div>Name: { this.state.onhold }</div>
    )
  }

  exe3 = () => {
    this.setState({ all: true })
  }

  exe4 = () => {
    console.log("Inside of exe4");
    console.log("db: ", );

    return(
      <div>{

        this.state.db.map((person, idx) => { return (
          <Person key={idx} info={ { name: person } } />
        ) })

        }</div>
    )


  }

  render() {
    return(
      <div>

        <form>
          <input type="text"
            value = { this.state.name }
            onChange={ (eve) => { this.setState({ name: eve.target.value }) } } />
        </form>

        <button onClick={this.exe1} >Show Name..</button>
        <br/><br/>

        { this.state.show ? React.createElement(this.exe2) : <div>Name: </div> }

        <br/><br/>

        <div>-------------------------</div>

        <h4>Show all names:</h4>
        <button onClick={this.exe3} >Show all names</button>

        <div>{ this.state.all ? React.createElement(this.exe4) : <div>clic to see the names.</div> }</div>

      </div>
    )
  }
}


  // <Person key={idx} info={ { name: person } } />
