import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Input, Button,Icon } from 'antd';
import './login.css'
import {IP} from './expressip'
class Login extends Component {

    //view
    render() {

        return (
            <div id='allLOgin' style={{ backgroundImage:"url('http://192.168.43.69:3000/./image/a6u.jpg')",backgroundSize:'100% 100%'}}>
                <h1 style={{color:'white'}}><Icon onClick={this.downBtn.bind(this)} type="left" style={{float:'left',lineHeight:'5rem'}} />手机号登陆</h1>
                <div style={{width:'100%' }}>
                    <p><Input  prefix={<Icon type="mobile"  />} size="large" addonBefore="手机号:" name='name' ref='name' style={{ width:'90%'}} /></p>
                    <p><Input prefix={<Icon type="lock" />} size="large" addonBefore="密码：" name='pwd' ref='pwd' style={{ width:'90%' }} /></p>
                    <p><Button style={{marginLeft:'2rem',height:'3rem',width:'85%',borderRadius:'2rem' ,background:'red',color:'white'}} onClick={this.clickbtn.bind(this)}>登陆</Button></p>
                    <Link to='./ref'>没有账号？前往注册</Link>
                </div>
                
            </div>
        )
    }
    //c
    clickbtn() {
        let param = { name: this.refs.name.input.value, pwd: this.refs.pwd.input.value }
        axios.post(IP+'/refirce', param).then(function (mig) {
            if (mig.data === 'ok') {
                this.props.history.push('./frist')
            }
        }.bind(this))
    }
    downBtn(){
        this.props.history.push('./user')
    }
}


export default Login;