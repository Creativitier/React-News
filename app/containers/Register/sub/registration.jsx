import React from 'react'
import './style.less'
export default class Registration extends React.Component {

    render() {
        return (
           <form className="wrapper">
               <div>欢迎注册</div>
               <div className="register-username common">
                   <label for="username">用户名</label>
                   <input defaultValue="fsf" id="username"/>
               </div>

               <div className="register-password common">
                   <label for="password">设置密码</label>
                   <input value="" id="password"/>
               </div>

               <div className="register-again common">
                   <label for="password-again">确认密码</label>
                   <input value="" id="password-again"/>
               </div>

               <div className="login">
                   <input type="submit"/>
               </div>
           </form>
        )
    }
}