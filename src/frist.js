import React, { Component } from 'react';
import axios from 'axios'
import { Input, Button, Icon, Carousel, Drawer, Avatar } from 'antd';
import './frist.css'
import { Link } from 'react-router-dom';
import { IP, IPimg } from './expressip'
import { connect } from "react-redux";
import { music } from './sort/actions.js'
//--------------------搜索-------------------------//
import Search from './search'
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
class Frist extends Component {
    //view
    constructor(p) {
        super(p)
        this.state = {
            list: [],
            visible: false,
            names: '',

        }
    }
    render() {
        axios.defaults.withCredentials = true;
        let list = this.state.list;
        return (
            <div style={{ overflowY: 'auto', height: '80%' }}>
                <div style={{ width: '100%', background: 'rgb(218, 5, 4)', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Icon onClick={this.showDrawer.bind(this)} type="bars" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem' }} />
                    <Input id='input' onFocus={this.changestr.bind(this)} prefix={<Icon type="search" />} placeholder="搜索音乐、视频、歌词、电台" size="small" ref='name' style={{ width: '65%', height: '2rem' }} />
                    <Icon type="logout" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem' }} />
                    
                </div>
                <div id='music'>
                    <a href="#">音乐</a>
                    <a href="#">视频</a>
                    <a href="#">电台</a>
                </div>
                <div id='prict'>
                    <Carousel autoplay>
                        <div><img src='./image/11.jpg' /></div>
                        <div><img src='./image/12.jpg' /></div>
                        <div><img src='./image/13.jpg' /></div>
                        <div><img src='./image/14.jpg' /></div>
                    </Carousel>
                </div>
                <div id='show_name'>
                    <figure>
                        <img src="./image/show2.png" />
                        <figcaption>私人FM</figcaption>
                    </figure>
                    <figure>
                        <img src="./image/show1.png" />
                        <figcaption>每日推荐</figcaption>
                    </figure>
                    <figure>
                        <img src="./image/show3.png" />
                        <figcaption>歌单</figcaption>
                    </figure>
                    <figure>
                        <img src="./image/show4.png" />
                        <figcaption>排行榜</figcaption>
                    </figure>
                </div>
                <div id='musics'>
                    <div><img src='./image/af1.png' />推荐歌单 ＞</div>
                    <div>
                        {list.map((o) => {
                            return <figure key={o._id}>
                                <img onClick={this.musicBtn.bind(this, o._id)} src={o.img} />
                                <figcaption>{o.name}</figcaption>
                            </figure>
                        })}
                    </div>
                </div>
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    style={{ padding: '0', overflowY: 'auto' }}
                >
                    <div style={{ backgroundImage: `url('${IPimg}./image/a6v.jpg')`, backgroundSize: '100% 10rem', height: '10rem' }}>
                        <Avatar style={{ width: '4rem', height: '4rem', marginTop: '2rem', marginLeft: '1rem' }} size='large' src='./image/music2.jpg' />
                        <p style={{ color: 'white', margin: '1rem 1rem' }}>欢迎你：{this.state.names}</p>
                    </div>
                    <div id='my_mess'>
                        <div>
                            <img src='./image/a73.png' />
                            <span>我的消息</span>
                        </div>
                        <div>＞</div>
                    </div>
                    <div id='my_mess_tow'>
                        <div>
                            <div>
                                <img src='./image/sy.png' />
                                <span>会员中心</span>
                            </div>
                            <div>＞</div>
                        </div>
                        <div>
                            <div>
                                <img src='./image/a36.png' />
                                <span>商城</span>
                            </div>
                            <div>＞</div>
                        </div>
                        <div>
                            <div>
                                <img src='./image/a73.png' />
                                <span>在线听歌免流量</span>
                            </div>
                            <div>＞</div>
                        </div>
                    </div>
                    <div id='my_mess_for'>
                        <div>
                            <div>
                                <img src='./image/ak6.png' />
                                <span>设置</span>
                            </div>
                            <div>＞</div>
                        </div>
                        <div>
                            <div>
                                <img src='./image/a36.png' />
                                <span>扫一扫</span>
                            </div>
                            <div>＞</div>
                        </div>
                        <div>
                            <div>
                                <img src='./image/a73.png' />
                                <span>个性换肤</span>
                            </div>
                            <div>＞</div>
                        </div>
                        <div>
                            <div>
                                <img src='./image/ak5.png' />
                                <span>夜间模式</span>
                            </div>
                            <div>＞</div>
                        </div>
                        <div>
                            <div>
                                <img src='./image/sy.png' />
                                <span>定时关闭</span>
                            </div>
                            <div>＞</div>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }
    //c
    componentWillMount(data) {
        axios.get(IP + '/musicAll', { params: {} }).then(data => {
            this.setState({
                list: [...data.data]
            })
        })
        axios.get(IP + "/getSession", { params: {} }).then(data => {
            console.log(data.data.name)
            this.setState({
                names: data.data.name
            })
        });
    }
    musicBtn(id) {
        axios.post(IP + '/musicAlls', { _id: id }).then(data => {
            this.props.dispatch(music(data.data))
            this.props.history.push('/music')
        })
    }
    changestr() {
        this.props.history.push('/search')
    }
    //左边弹出
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
}

function filter(state) {
    return {}
}

export default connect(filter)(Frist);