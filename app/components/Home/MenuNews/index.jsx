import React from 'react'
import { Tabs, Icon } from 'antd';
import { Link } from 'react-router'
import NewsList from '../../Com'
import './style.less'
const TabPane = Tabs.TabPane;
export default class MenuNews extends React.Component {

    constructor() {
        super()
        this.state = {
            mode: 'yule'
          }
    }

    handleModeChange(e) {
        const mode = e
        this.setState({ mode });
    }
    render() {
        return (
            <div>
                <Tabs onChange={this.handleModeChange.bind(this)} defaultActiveKey="redian">
                    <TabPane tab={<span><Icon type="appstore-o" />热点</span>} key="redian">
                       <NewsList type="shehui"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore-o" />娱乐</span>} key="yule">
                       <NewsList type="yule"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore-o" />国际</span>} key="guoji">
                        <NewsList type="guoji"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore-o" />国内</span>} key="guonei">
                        <NewsList type="guonei"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore-o" />社会</span>} key="shehui">
                        <NewsList type="shehui"/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
