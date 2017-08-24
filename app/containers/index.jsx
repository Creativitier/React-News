import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as us from '../actions'
import {getItem} from '../local'
 class App extends React.Component {

    componentDidMount() {
        //检测是否有用户名
        if(getItem(name)) {
            this.pros.userAction.userinfo({useranme: getItem(name)})
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

/**
 * 绑定数据
 */


 const mapStateToProps = (state) => {
    return {
        userinfo: state.uesrinfo
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        userAction:  bindActionCreators(us, dispath)
    }
}
 export default connect(
     mapStateToProps,
     mapDispatchToProps
 )(App)