import React from 'react'
import { Row, Col } from 'antd'
import Item from '../../../components/Com/item'
import { getNews } from '../../../fetch/get' 
export default class NewList extends React.Component {
    
    constructor() {
        super()
        this.state = {
            data: [],
            count: 5,
            hasMore: false,
            loading: false,
            text: '加载更多'
            
        }
    }

    componentDidMount() {
        this.loadMore()

        window.addEventListener('scroll', () => {
            let top = this.refs.loadMore.getBoundingClientRect().top
            let windowHeight = window.screen.height
            if(top && top < windowHeight) {
                if(this.state.hasMore) return 
                this.setState({
                    hasMore: true,
                    loading: true 
                })
                this.loadMore()
            }
        })
    }

    loadMore() {
        let count = this.state.count
        const type = this.props.type
        getNews(type, count).then(res => {
            return res.json()
        }).then(json => {
            const data = json
            this.setState({
                data,
                count: count + 5,
                loading: false,
                hasMore: false
            })

            if( this.state.count > 50) {
                 this.setState({
                     text: '数据已全部加载完成'
                 })
            } 

        })
    }

    render() {
        let {hasMore, initializing, refreshedAt} = this.state

        const list = this.state.data

        let listData = list.length ?
             list.map((newItem, index) => (
                 <Item key={index} index={index} newsItem={newItem} />
             )):
             ''

        return (
            <div>
                <Row>
                    {listData}
                </Row>
                <div ref="loadMore">
                  {
                      this.state.hasMore ?
                      <div class="loading">加载中...</div> :
                      <div class="loading">{this.state.text}</div> 
                  }
                </div>
            </div>
        )
    }
}
