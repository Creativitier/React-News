import React from 'react'
import Search from '../../Com/search'
import './style.less'

export default class HomeHeader extends React.Component {
    
    login() {
        this.props.login()
    }
    render() {
        return (
            <div className="home-index">
                <div className="home-header-left">
                    <i className="iconfont icon-news"></i>
                </div>
                <div className="home-header-middle">
                    <div>
                        <i className="iconfont icon-xinwen"></i>
                        <Search className="search-keyword"/>
                    </div>
                </div>
                <div className="home-header-right" onClick={this.login.bind(this)}>
                    <i className="iconfont icon-login"></i>
                </div>
            </div>
        )
    }
}
