import React, { Component } from 'react';
import axios from 'axios'
import { Input, Button,Icon } from 'antd';
import './ref.css'
import {IP} from './expressip'

class Ref extends Component {
    //view
    constructor(p) {
        super(p)
        this.state = {
        }
    }
    render() {
        return (
            <div className='ref_color' >
             <h1 style={{color:'white'}}><Icon onClick={this.downBtn.bind(this)} type="left" style={{float:'left',lineHeight:'5rem'}} />手机号注册</h1>
                <div  style={{width:'100%' }}>
                    <p><Input placeholder="+86输入手机号" size="large" prefix={<Icon type="mobile"  />} name='name'  ref='input_name' style={{ width:'90%'}} /></p>
                    <p><Input placeholder="设置登陆密码，不少于6位" size="large" prefix={<Icon type="lock" />} name='pwd' ref='input_pwd' style={{ width:'90%'}} /></p>
                    <p><Input placeholder="请输入昵称" size="large" prefix={<Icon type="user" />} name='nekname' ref='input_nekname' style={{ width:'90%'}} /></p>
                    <p><Button style={{marginLeft:'2rem',height:'3rem',width:'85%',borderRadius:'2rem' ,background:'red',color:'white'}} onClick={this.clickbts.bind(this)}>下一步</Button></p>
                </div>
            </div>
        )
    }
    //c
    clickbts(){
        let allStr={
            name:this.refs.input_name.input.value,
            pwd:this.refs.input_pwd.input.value,
            nekname:this.refs.input_nekname.input.value
        }
        axios.post(IP+'/ref',allStr).then((data)=>{
            this.props.history.push('./code')
        })
    }
    downBtn(){
        this.props.history.push('./login')
    }
}

export default Ref;