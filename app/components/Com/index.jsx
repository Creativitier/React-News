import React from 'react'
import './style.less'
import { getNews } from '../../fetch/get'
import Item from './item'
export default class NewsList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
       this.initialData.call(this)
    }
    initialData() {
        const type = this.props.type
        const count = this.props.count
        getNews(type, count).then(res => {
            return res.json()
        }).then(json  => {
            let data = json
            setTimeout(() => {
                this.setState({data})
            }, 800)
        })
    }

    render() {

        let newList = this.state.data.length > 0 ?
        this.state.data.map((newsItem, index) => (
            <Item newsItem={newsItem} index={index} key={index}/>
        )):
        ''

        return (
           <div>
                {
                    this.state.data.length ?
                    newList:
                    '加载中...'
                }
           </div>
        )
    }
}

