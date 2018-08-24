import React, { Component } from 'react';
import axios from 'axios'
import { Input, Button, Icon, Carousel } from 'antd';
import './user.css'
import {IP} from './expressip'
class User extends Component {
    //view
    constructor(p) {
        super(p)
        this.state = {
        }
    }
    render() {
        return (
            <div style={{ background: 'gainsboro' }}>
                <div style={{ width: '100%', background: 'rgb(218, 5, 4)', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <h2 style={{ color: 'white', marginLeft: '8rem', lineHeight: '5rem' }}>账号</h2>
                    <img style={{ width: '2.8rem', height: '2.8rem' }} src='./image/af3.png' />
                </div>
                <div id='user_photo'>
                    <img src='./image/user1.jpg' />
                    <div>
                        <p>登录网易云音乐</p>
                        <p>320k高音质无线下载，手机电脑多段同步</p>
                        <p onClick={this.loginBtn.bind(this)}>立即登陆</p>
                    </div>
                   
                </div>
                <div id='messign'>
                    <div>
                        <a href='#'>动态</a>
                        <p>1</p>
                    </div>
                    <div>
                        <a href='#'>关注</a>
                        <p>2</p>
                    </div>
                    <div>
                        <a href='#'>粉丝</a>
                        <p>0</p>
                    </div>
                    <div>
                        <Icon type="edit" style={{ fontSize: '1.5rem', marginLeft: '1rem' }} />
                        <p>我的资料</p>

                    </div>
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
            </div>
        )
    }
    //c
    loginBtn(){
        this.props.history.push('./login')
    }
}

export default User;