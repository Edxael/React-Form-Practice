import React from 'react'


export default class extends React.Component {

  state = { email: "", password: "" }

  exe1 = (eve) => {
    eve.preventDefault()
    console.log("Email: ", this.state.email)
    console.log("password: ", this.state.password)
  }

  render() {
    return(
      <div>
        <h4>Log - In</h4>
        <form onSubmit={this.exe1}>
          <input type="email" required
            value = { this.state.email }
            onChange={ (eve) => { this.setState({ email: eve.target.value }) } } /><br/><br/>

          <input type="password"
            value = {this.state.password}
            onChange={ (eve) => { this.setState({ password: eve.target.value }) } } /><br/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}
