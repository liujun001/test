import React from 'react'
import ReactDOM from 'react-dom'
import '../../fe-css/dist/index.css'

class Foo extends React.Component{
  render(){
    return (
      <h1>test</h1>
    )
  }
}

ReactDOM.render(<Foo />,document.querySelector('#container'))
