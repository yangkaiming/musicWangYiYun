import React, { Component } from 'react';
import axios from 'axios'
import { Input, Button, Icon } from 'antd';
import './frist.css'
import { Link } from 'react-router-dom';
import { IP } from './expressip'
import { connect } from "react-redux";
import { musices } from './sort/actions.js'
class Search extends Component {
    //view
    constructor(p) {
        super(p)
        this.state = {
            music: [],
        }
    }
    render() {
        let music = this.state.music
        console.log(music)
        return (
            <div style={{ overflowY: 'auto', height: '80%' }}>
                <div style={{ width: '100%', background: 'rgb(218, 5, 4)', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Input id='input' onChange={this.changestr.bind(this)} prefix={<Icon type="search" />} placeholder="搜索音乐、视频、歌词、电台" size="small" ref='name' style={{ width: '75%', height: '2rem' }} />
                    <Button onClick={this.btndo.bind(this)} style={{ background: 'rgb(218, 5, 4)', color: 'white', border: 'none' }}>取消</Button>

                </div>
                <div id='music'>
                    <a href="#">单曲</a>
                    <a href="#">歌手</a>
                    <a href="#">专辑</a>
                    <a href="#">歌单</a>

                </div>
                <div>
                    {
                        music.map(item => {
                            return <ul key={item._id} style={{padding:'0'}}  onClick={this.imgBtns.bind(this, item._id)}>
                                <li style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between',height:'4rem',width:'100%',borderBottom:'.08rem solid grey',alignItems: 'center' }}>
                                  <div> <img style={{ width: '3rem',marginRight: '1.5rem' }} src={item.img} />{item.name}</div>
                                    <div>
                                        <img style={{ width: '2rem', marginRight: '1rem' }}  src="./image/a_0.png" />
                                        <img style={{ width: '2rem', marginRight: '1rem' }} src="./image/a3a.png" />
                                    </div>
                                </li>
                            </ul>

                        })
                    }

                </div>
            </div>
        )
    }
    //c

    changestr() {
        axios.post(IP + "/findalls", { name: this.refs.name.input.value }).then(data => {
            if (data.data.length > 0) {
                this.setState({
                    music: data.data
                })
            } else {
                music: ['抱歉！未发现该歌曲']
            }

        });
    }
    btndo() {
        this.props.history.goBack('./main/frist')
    }
    imgBtns(id) {
        this.props.dispatch(musices(id));
        this.props.history.push('./musicall')
    }
}



export default connect ()(Search);