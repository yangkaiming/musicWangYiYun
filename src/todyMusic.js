import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { IP, IPimg } from './expressip'
import { Input, Button, Icon, Drawer, Avatar } from 'antd';
import { musices, mymusic } from './sort/actions.js'

class TodyMusic extends Component {
    constructor(p) {
        super(p)
        this.state = {
            todyMusic: []
        }
    }
    //view
    render() {
        let todyMusic = this.state.todyMusic
        return (
            <div >
                <div style={{ width: '100%', background: 'rgb(218, 5, 4)', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <Icon onClick={this.last_btn.bind(this)} type="arrow-left" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem', marginRight: '2rem' }} />
                        <span style={{ color: 'white', fontSize: '1.2rem' }}>最近播放</span>
                    </div>
                    <div>
                        <Icon onClick={this.delBtn.bind(this)} style={{ color: 'white', fontSize: '1.6rem', marginBottom: '.5rem', marginTop: '.3rem', marginRight: '1rem' }} type="delete" />
                    </div>
                </div>
                <div id='music' style={{ background: 'rgb(218, 5, 4)' }}>
                    <a style={{ color: 'white' }} href="#">歌曲</a>
                    <a style={{ color: 'white' }} href="#">视频</a>
                </div>
                <div>
                    <div id='mus_top'>
                        <div>
                            <img src="./image/a_j.png" />
                            <span>播放全部</span>
                            <span>(共{todyMusic.length}首)</span>
                        </div>
                        <div>
                            <Icon style={{ fontSize: '1.3rem' }} type="bars" />
                            <span>多选</span>
                        </div>
                    </div>
                    {
                        todyMusic.map((i, index) => {
                            return <div id='mus' key={i._id} onClick={this.imgBtn.bind(this, i._id)} >
                                <div>
                                    <p>{index + 1}</p>
                                    <div>
                                        <h5>{i.name}</h5>
                                        <span>{i.usename}</span>
                                    </div>
                                </div>
                                <div>
                                    <Icon type="play-circle-o" style={{ color: '#8d908f', fontSize: '1.5rem', marginRight: '1rem' }} />
                                    <Icon type="menu-unfold" style={{ color: '#8d908f', fontSize: '1.5rem' }} />

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    //c
    componentWillMount() {
        let todyMusic = this.props.todyMusic[0]
        let arr = []
        arr.push(todyMusic)
        console.log(arr)
        let arrs = []
        if (arr.length > 0) {
            for (let i of arr) {
                axios.post(IP + '/findtody', { _id: i }).then(data => {
                    arrs.push(data.data)
                    this.setState({
                        todyMusic: arrs
                    })

                })
            }
        }


    }
    delBtn() {
        this.setState({
            todyMusic:['']
        })
    }
    last_btn() {
        this.props.history.push('./main/mymusic')
        this.props.todyMusic[0]=''
    }

    imgBtn(ids) {
        this.props.dispatch(musices(ids));
        this.props.history.push('/musicall')
    }
}
function filters(states) {
    return { todyMusic: states.todyMusic }
}

export default connect(filters)(TodyMusic);