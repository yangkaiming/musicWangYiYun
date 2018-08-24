import React, { Component } from 'react';
//----------------------登陆----------------//
import Login from './login'
//--------------------注册-------------------//
import Ref from './ref'
//------------------------接受验证码-----------------//
import Code from './code'
//------------------------主页-------------------------//
import Frist from './frist'
//-----------------------账户-------------------------//
import user from './user'
//--------------------我的音乐------------------//
import Mymusic from './mymusic'

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './all.css'

import { Icon } from 'antd';
//react-redux的容器
import { Provider } from "react-redux";
import Store from './sort/short.js'
class Main extends Component {
    //view
    render() {
        return (
            <div>
                <Provider store={Store} >
                    <Router>
                        <div style={{ position: 'relative', width: '100%', margin: '0 auto', height: '100%' }}>
                            <div style={{ marginBottom: '3rem' }} >
                                <Route path="/main/login" component={Login} />
                                <Route path="/main/ref" component={Ref} />
                                <Route path="/main/code" component={Code} />
                                <Route path="/main/frist" component={Frist} />
                                <Route path="/main/user" component={user} />
                                <Route path="/main/mymusic" component={Mymusic} />
                                
                            </div>
                            <div id='musicall' >
                                <Link to='/main/frist'><img src='./image/78.png' /> <p>发现音乐</p></Link>
                                <Link to='/main/mymusic' ><img src='./image/t_actionbar_music_selected.png' /> <p>我的音乐</p></Link>
                                <Link to='/main/login'><img src='./image/t_actionbar_friends_selected.png' /><p>朋友</p></Link>
                                <Link to='/main/user'><Icon type="user" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem' }} /> <p>账号</p></Link>
                            </div>
                        </div>
                    </Router>
                </Provider>

            </div>
        )
    }
    //c

}

export default Main;