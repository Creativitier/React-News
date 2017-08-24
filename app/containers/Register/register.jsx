import React from 'react'
import Registration from './sub/registration'
import Login from './sub/login'
export default class Register extends React.Component {

    render() {
        const jedge = this.props.params.jedge
        return (
           <div>
              {
                jedge==='no'?
                <div> <Registration/> </div>:
                <div> <Login/> </div>
              }
           </div>
        )
    }
}