import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: false         
      }
    }
    
  render() {
    return (
      <div>
        Welcome To Everyone to PSA
      </div>
    )
  }
}

export default UserGreeting
