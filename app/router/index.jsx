import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import ArticleList from '../containers/ArticleList'
import Register from '../containers/Register/register'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path={`/details/:id`} component={Detail}/>
                    <Route path={`/search/:keyword`} component={ArticleList}/>
                    <Route path={`/register/:jedge`} component={Register}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
