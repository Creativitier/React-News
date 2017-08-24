import React from 'react'
import BackHeader from '../../components/Com/backHeader'
import Search from '../../components/Com/search'
import HotWord from '../../components/HotWord'
import NewsList from '../../components/Com'
import './style.less'
export default class ArticleList extends React.Component {

    constructor() {
        super()
        this.state = {
            keyword: ''
        }
    }

    componentDidMount() {
        const keyword = this.props.params.keyword
        this.setState({ keyword })
    }
    render() {

        const keyword = this.state.keyword
        console.log(keyword)
        return (
            <div>
                <BackHeader/>
                <div className="search-input">
                    <i className="iconfont icon-xinwen"></i>
                    <Search keyword={keyword} type={true}/>
                </div>
                <HotWord/>
                <NewsList type="guoji" count={15}/>
            </div>
        )
    }
}
