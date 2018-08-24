import React, { Component } from 'react';
import axios from 'axios'
import Divider from 'antd/lib/divider';
import { Input, Button, Icon } from 'antd';
import {IP} from './expressip'
class Code extends Component {
    //view
    constructor(p) {
        super(p)
        this.state = {
            uptext: '',
        }
  
    }
    render() {
        return (
            <div>
                <h1 style={{ color: 'white' }}><Icon onClick={this.downBtn.bind(this)} type="left" style={{ float: 'left', lineHeight: '5rem' }} />手机验证码</h1>
                <div style={{ marginLeft: '30%' }}>
                    <p><Input size="large" addonBefore="验证码:" ref='code_name' style={{ width: '60%' }} disabled /></p>
                    <p><Input size="large" onBlur={this.change.bind(this)} placeholder="请输入验证码" ref='code_names' style={{ width: '60%' }} />
                        <label style={{color:'red'}}>{this.state.uptext}</label>
                    </p>
                </div>
                <Button style={{ marginLeft: '2rem', height: '3rem', width: '85%', borderRadius: '2rem', background: 'red', color: 'white' }} onClick={this.nexts.bind(this)}>完成</Button>
            </div>
        )
    }
    //c
    
    nexts() {
        this.props.history.push('./login')
    }
    downBtn(){
        this.props.history.push('./ref')
    }
    change() {
        if (this.refs.code_names.input.value !== this.refs.code_name.input.value) {
            this.setState({
                uptext: '验证码错误',
            })
        }else{
            this.setState({
                uptext: '√',
            })
        }
    }
    componentDidMount(data) {
        axios.get(IP+'/code', { params: {} }).then(data => {
            this.refs.code_name.input.value = data.data
        })
    }

}

export default Code;