import React, { Component } from 'react';
import axios from 'axios'
import { Icon } from 'antd';
import { connect } from "react-redux";
import { IP, IPimg } from './expressip'
import './music.css'
import { setTimeout } from 'timers';
import { music,todymusic,musices } from './sort/actions.js'

class Music extends Component {
    constructor(p) {
        super(p)
        this.state = {
            musicList: [],
            musicss: []
        }
    }
    //view
    render() {
        let musicList = this.state.musicList
        let musicss = this.state.musicss
        return (
            <div style={{ position: 'relative' }}>
                <div id="background" style={{ backgroundImage: `url('${IPimg}${this.props.musicId[0].img}')` }}></div>
                <div id='backg' style={{ position: 'absolute' }} >
                    <div style={{ width: '100%', opacity: 0.8, height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <Icon type="left" onClick={this.oncli.bind(this)} style={{ color: 'white', fontSize: '2rem' }} />
                        <h2 style={{ color: 'white', lineHeight: '4rem' }}>歌单</h2>
                        <img style={{ width: '2rem', height: '2rem' }} src='./image/a2p.png' />
                    </div>
                    <div>
                        {
                            musicList.map(item => {

                                return <div key={item._id}>
                                    <div id='music_one'>
                                        <img style={{ width: '8rem', height: '10rem', marginLeft: '2rem',marginRight:'1rem' }} src={item.img} />
                                        <div >
                                            <p>{item.name}</p>
                                            <p>优雅的深呼吸<Icon type="right" style={{ color: 'white', fontSize: '1rem' }} /></p>
                                        </div>

                                    </div>

                                    <div id='icon'>
                                        <figure>
                                            <img src="./image/a2j.png" />
                                            <figcaption>3321</figcaption>
                                        </figure>
                                        <figure>
                                            <img src="./image/a2h.png" />
                                            <figcaption>30</figcaption>
                                        </figure>
                                        <figure>
                                            <img src="./image/a2k.png" />
                                            <figcaption>17</figcaption>
                                        </figure>
                                        <figure>
                                            <img src="./image/a2i.png" />
                                            <figcaption>下载</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <div id='mus_top'>
                        <div>
                            <img src="./image/a_j.png" />
                            <span>播放全部</span>
                            <span>(共{musicss.length}首)</span>
                        </div>
                        <div>
                            <img src="./image/a3b.png" />
                            <span>多选</span>
                        </div>
                    </div>
                    {
                        musicss.map((i, index) => {
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
        if (this.props.musicId.length != 0) {
            axios.post(IP + '/musicAlls', { _id: this.props.musicId[0]._id }).then(mig => {
                let arr = mig.data.musicId
                let arrs = []
                for (let p of arr) {
                    setTimeout(() => {
                        axios.post(IP + '/musics', { _id: p }).then(data => {
                            arrs.push(data.data)
                            this.setState({
                                musicss: arrs
                            })
                        })
                    }, 200)
                }
                this.setState({
                    musicList: [mig.data],
                })
            })
        } else {
            axios.post(IP + '/musicAlls', { _id: '5b6e71a697b258f2915b5b90' }).then(mig => {

                let arr = mig.data.musicId
                let arrs = []
                for (let p of arr) {
                    setTimeout(() => {
                        axios.post(IP + '/musics', { _id: p }).then(data => {
                            arrs.push(data.data)
                            this.setState({
                                musicss: arrs
                            })
                        })
                    }, 200)
                }
                this.setState({
                    musicList: [mig.data]
                })
            })
        }
    }
    oncli() {
        this.props.history.push('./main/frist')
    }
    imgBtn(ids) {
        this.props.dispatch(musices(ids));
        this.props.dispatch(todymusic(ids));
        this.props.history.push('/musicall')
    }

}
function filt(state) {
    console.log(state)
    return { musicId: state.musicStrs }
}

export default connect(filt)(Music);