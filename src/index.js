import React from 'react'
import ReactDOM from 'react-dom'
import Template from './Pages/00-Template/Template'

class IndexComp extends React.Component {
  render() {
    return(
      <div>
        <div>Page</div>
        <Template/>
      </div>
    )
  }
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"));
