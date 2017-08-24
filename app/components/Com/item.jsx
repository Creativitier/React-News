import React from 'react'
import { Col } from 'antd'
import './style.less'
import { Link } from 'react-router'
export default class Item extends React.Component {

    scrollTop() {
        document.body.scrollTop = 0
    }

    render() {
        const index = this.props.index
        const newsItem = this.props.newsItem
        return (
            <div>
                <Col key={index} span={24}>
                    <section className="m_article list-item special_section clearfix">
                        <Link to={`details/${newsItem.uniquekey}`} onClick={this.scrollTop.bind(this)}>
                            <div className="m_article_img">
                                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                            </div>
                            <div className="m_article_info">
                                <div className="m_article_title">
                                    <span>{newsItem.title}</span>
                                </div>
                                <div className="m_article_desc clearfix">
                                    <div className="m_article_desc_l">
                                        <span className="m_article_channel">{newsItem.realtype}</span>
                                        <span className="m_article_time">{newsItem.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </section>
                </Col>
            </div>
        )
    }
}
