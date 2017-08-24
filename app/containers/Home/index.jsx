import React from 'react'
import HomeHeader from '../../components/Home/HomeHeader'
import Carousel from '../../components/Home/Carousel'
import MenuNews from '../../components/Home/MenuNews'
import MoreNews from './sub/moreNews'
import { BackTop } from 'antd';
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
 class Home extends React.Component {

    handlerLogin() {
        const userinfo = this.props.userinfo
        if(!userinfo.username) {
            hashHistory.push(`/register/no`)
        }
    }
    render() {
        return (
            <div>
                <HomeHeader login={this.handlerLogin.bind(this)}/>
                <Carousel />
                <MenuNews />
                <div className="recommend">推荐</div>
                <MoreNews type="guonei" />
                <div>
                    <BackTop style={{right: '20px'}}/>
                </div>
            </div>
        )
    }
}

/**
 * 绑定数据
 */

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
}

const mapDispatchToProps = (dispath) => {
    return {
       
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)