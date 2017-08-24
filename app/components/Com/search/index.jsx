import React from 'react'
import { hashHistory } from 'react-router'
import './style.less'
export default class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props === prevProps || this.state === prevProps) return
        this.setState({
            value: this.props.keyword
        })
    }

    handlerChange(e) {
       const value = e.target.value
       this.setState({value})
       console.log(value)
    }
    
    handlerDown(e) {
        const value = this.state.value
        if(e.keyCode === 13) {
            hashHistory.push(`search/${encodeURIComponent(value)}`)
        }
    }

    render() {

        const search = this.props.type?'search': ''
        return (
            <div style={{width: '100%'}}>
                <input 
                    className={`search-keyword ${search}`}
                    value={this.state.value}
                    onChange={this.handlerChange.bind(this)}
                    onKeyDown={this.handlerDown.bind(this)}
                />
            </div>
        )
    }
}
