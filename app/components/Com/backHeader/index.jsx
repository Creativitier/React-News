import React from 'react'
import './style.less'
import {hashHistory} from 'react-router'
export default class BackHeader extends React.Component {

    clickHandle() {
        const path = this.props.path
        hashHistory.push(`/`)
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="iconfont icon-left"></i>
                </span>
                <h2>{this.props.title}</h2>
                <div></div>
            </div>
        )
    }
}
