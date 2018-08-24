import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { IP, IPimg } from './expressip'
import { Input, Button, Icon, Drawer, Avatar, Menu, Dropdown } from 'antd';
import './mymusic.css'
import { musices} from './sort/actions.js'

class Mymusic extends Component {
    constructor(p) {
        super(p)
        this.state = {
            visible: false,
            lsits: []
        }
    }
    //view
    render() {
        let lists = this.state.lists;
        const menu = (
            <Menu>
                <Menu.Item>
                    <div id='mus'  >
                        <div>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: '5rem', height: '5rem' }} src='./image/ale.png' />
                                <div style={{ marginTop: '1.3rem' }}>
                                    <p style={{ margin: 0 }}>我喜欢的音乐</p>
                                    <p>（ {this.props.localmus.length} ）首</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Icon type="menu-unfold" style={{ color: '#8d908f', fontSize: '1.5rem' }} />
                        </div>
                    </div>
                </Menu.Item>
            </Menu>
        );
        return (
            <div >
                <div style={{ width: '100%', background: 'rgb(218, 5, 4)', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Icon onClick={this.showDrawer.bind(this)} type="bars" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem' }} />
                    <Input id='input' onFocus={this.changestr.bind(this)} prefix={<Icon type="search" />} placeholder="搜索音乐、视频、歌词、电台" size="small" ref='name' style={{ width: '65%', height: '2rem' }} />
                    <Icon type="logout" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem' }} />
                </div>
                <div className="localmusic" onClick={this.localMusic.bind(this)}>
                    <img style={{ width: '2.2rem', height: '2.2rem', margin: "0 1rem" }} src="./image/a0n.png" />
                    <span>本地音乐( {this.props.localmus.length} )</span>
                </div>
                <div className="localmusic" onClick={this.todyMusic.bind(this)}>
                    <img style={{ width: '2.2rem', height: '2.2rem', margin: "0 1rem" }} src="./image/a0a.png" />
                    <span>最近播放({this.props.musaNum.length})</span>
                </div>
                <div className="localmusic">
                    <img style={{ width: '2.2rem', height: '2.2rem', margin: "0 1rem" }} src="./image/zy.png" />
                    <span>下载管理</span>
                </div>
                <div className="localmusic">
                    <img style={{ width: '2.2rem', height: '2.2rem', margin: "0 1rem" }} src="./image/a0q.png" />
                    <span>我的电台</span>
                </div>
                <div className="localmusic">
                    <img style={{ width: '2.2rem', height: '2.2rem', margin: "0 1rem" }} src="./image/a0_.png" />
                    <span>我的收藏</span>
                </div>
                <div style={{ background: 'gainsboro', height: 'auto' }}>
                    <Dropdown overlay={menu}>
                        <div className="ant-dropdown-link" >
                            <Icon type="right" style={{ fontSize: '1.3rem', margin: '0.1rem 1rem' }} />
                            <span style={{ fontSize: '0.9rem' }}>创建歌单</span>
                            <Icon type="down" />
                            <Icon type="setting" style={{ marginLeft: '60%' }} />
                        </div>
                    </Dropdown>
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
    componentWillMount() {
        axios.get(IP + '/musicAllname', { params: {} }).then(data => {
            console.log(data.data)
            this.setState({
                lists: [...data.data]
            })
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
    //本地音乐
    localMusic() {
        this.props.history.push('/localMusic')
    }
//最近播放
todyMusic(){
    this.props.history.push('/todyMusic')
    
}
}
function filt(state) {
    console.log(state)
    return { musicId: state.musicStrs, localmus: state.localMusic,musaNum: state.musicStr }
}

export default connect(filt)(Mymusic);