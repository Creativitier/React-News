import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import './style.less'
export default class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 1000,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }

        const width = {
            width: '100%'
        }
        return (
            <div className="wapper">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-item">
                        <img style={width} src={require('../../../static/image/img_1.jpeg')} />
                    </div>
                    <div className="carousel-item">
                        <img style={width} src={require('../../../static/image/img_2.jpeg')} />
                    </div>
                    <div className="carousel-item">
                        <img style={width} src={require('../../../static/image/img_3.jpeg')} />
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        );
    }
}