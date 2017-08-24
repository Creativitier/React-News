import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RouterConfig from './router'
import 'antd/dist/antd.css'
import './static/font/iconfont.css'
import store from './store'
render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>,
    document.getElementById('root')
)
