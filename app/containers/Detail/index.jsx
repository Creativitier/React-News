import React from 'react'
import DetailSub from '../../components/DetailSub'
import BackHeader from '../../components/Com/backHeader'
import { getDetail } from '../../fetch/get'
import { Card, BackTop } from 'antd'
import NewsList  from '../../components/Com/'
export default class Detail extends React.Component {

    constructor() {
        super()
        this.state = {
            ID: -1,
            detail: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props === prevProps || this.state === prevProps) return
        this.detailLoad()
    }

    detailLoad() {
        const ID = this.props.params.id
        this.setState({ ID })

        getDetail(ID).then(res => {
            return res.json()
        }).then(json => {
            const detail = json
            this.setState({detail})
        }).catch((error) => {
            console.log('fail:'+error)
        })
    }
    render() {
        const {title} = this.state.detail
        return (
            <div>
                <BackHeader title={title}/>
                <DetailSub detail={this.state.detail}/>
                <div style={{ background: '#ECECEC', padding: '5px 5px 0' }}>
                    <Card title="要闻" bordered={false} style={{ width: '100%'}}>
                      <NewsList type="yule" count={7}/>
                    </Card>
                </div>
                <div>
                    <BackTop style={{right: '20px'}}/>
                </div>
            </div>
        )
    }
}
