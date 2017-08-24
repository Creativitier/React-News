import React from 'react'
import './style.less'
export default class DetailSub extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            detail: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props === prevProps || this.state === prevProps) return
        const detail = this.props.detail
        this.setState({
            detail
        })
    }
    createMarkup() {
        const pagecontent = this.state.detail.pagecontent
        return {__html: pagecontent};
      }
    
      MyComponent() {
        return <div dangerouslySetInnerHTML={this.createMarkup()}/>;
      }
    render() {
        return (
           <div className='detail-padding'>
               {this.state.detail?this.MyComponent():''}
           </div>
        )
    }
}
