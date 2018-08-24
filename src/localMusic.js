import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { IP, IPimg } from './expressip'
import { Input, Button, Icon, Drawer, Avatar } from 'antd';
import { musices ,mymusic,todymusic} from './sort/actions.js'

class LocalMusic extends Component {
    constructor(p) {
        super(p)
        this.state = {
            localmusic: []
        }
    }
    //view
    render() {
        let localmusic = this.state.localmusic
        return (
            <div >
                <div style={{ width: '100%', background: 'rgb(218, 5, 4)', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <Icon onClick={this.last_btn.bind(this)} type="arrow-left" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem', marginRight: '2rem' }} />
                        <span style={{ color: 'white', fontSize: '1.2rem' }}>本地音乐</span>
                    </div>
                    <div>
                        <Icon onClick={this.search_btn.bind(this)} type="search" style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem', marginRight: '2rem' }} />
                        <Icon style={{ color: 'white', fontSize: '2rem', marginBottom: '.5rem', marginTop: '.3rem' }} type="ellipsis" />
                    </div>
                </div>
                <div id='music' style={{ background: 'rgb(218, 5, 4)' }}>
                    <a style={{ color: 'white' }} href="#">单曲</a>
                    <a style={{ color: 'white' }} href="#">歌单</a>
                    <a style={{ color: 'white' }} href="#">专辑</a>
                    <a style={{ color: 'white' }} href="#">文件夹</a>
                </div>
                <div>
                    <div id='mus_top'>
                        <div>
                            <img src="./image/a_j.png" />
                            <span>播放全部</span>
                            <span>(共{localmusic.length}首)</span>
                        </div>
                        <div>
                            <Icon style={{ fontSize: '1.3rem'}}  type="bars" />
                            <span>多选</span>
                        </div>
                    </div>
                    {
                        localmusic.map((i, index) => {
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
                                    <Icon  type="menu-unfold" style={{ color: '#8d908f', fontSize: '1.5rem' }} />

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
        axios.get(IP + '/findall', { params: {} }).then(data => {
            this.props.dispatch(mymusic(data.data));
            this.setState({
                localmusic: [...data.data]
            })

        })
    }
    last_btn() {
        this.props.history.push('./main/mymusic')
    }
    search_btn() {
        this.props.history.push('/search')

    }
    imgBtn(ids) {
        this.props.dispatch(musices(ids));
        this.props.dispatch(todymusic(ids));        
        this.props.history.push('/musicall')
    }
}

export default connect()(LocalMusic);
