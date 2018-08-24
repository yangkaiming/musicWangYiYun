import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Icon, Progress, Button, Radio } from 'antd';
import { IP, IPimg } from './expressip'
import './musicall.css'
import { connect } from "react-redux";


class Musicall extends Component {
    constructor(p) {
        super(p)
        this.state = {
            musall: [],
            percent: 0,
            isPlay: false,
        }
    }
    //view
    render() {
        let musall = this.state.musall
        return (

            <div style={{ height: '100%' }}>
                {
                    musall.map(o => {
                        return <div id='musallaa' key={o._id} style={{ backgroundImage: `url('${IPimg}${o.imgs}')`, backgroundSize: '100% 100%', position: 'relative' }}>
                            <div style={{ width: '100%', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '.08rem solid gainsboro' }}>
                                <Icon type="left" onClick={this.oncli.bind(this)} style={{ color: 'white', fontSize: '2rem' }} />
                                <div>
                                    <p style={{ color: 'white', margin: '0' }}>{o.name}</p>
                                    <p style={{ color: 'white', margin: '0', textAlign: 'center' }}>{o.usename}</p>
                                </div>
                                <img style={{ width: '2rem', height: '2rem' }} src='./image/a2p.png' />
                            </div>
                            <div id='musicshop'>
                                <img style={{
                                    width: '14rem', position: 'absolute',
                                    top: '9rem',
                                    left: '4rem'
                                }} src='./image/abq.png' />
                                <img id="bg_bin" className='imgs' style={{
                                    borderRadius: '50%', width: '6.8rem',
                                    position: 'absolute',
                                    top: '12.6rem',
                                    left: '7.6rem',
                                }} src={o.img} />
                            </div>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-around',
                                marginTop: '1rem',
                                alignItems: 'center',
                                height: '3rem'
                            }}>
                                <figure>
                                    <img style={{ width: '4.5rem' }} src="./image/aco.png" />
                                </figure>
                                <figure>
                                    <img style={{ width: '2rem' }} src="./image/a2h.png" />
                                </figure>
                                <figure>
                                    <img style={{ width: '2rem' }} src="./image/a2k.png" />
                                </figure>
                                <figure>
                                    <img style={{ width: '2rem' }} src="./image/a2i.png" />
                                </figure>
                            </div>
                            <div style={{ height: '8rem' }}>
                                <div style={{ width: '80%', margin: '1rem  auto' }}>
                                    <Progress strokeColor="red" format={percent => `${percent} `} percent={this.state.percent} />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}>
                                    <Icon onClick={this.lastBtn.bind(this)} style={{ fontSize: '2rem', color: 'white' }} type="step-backward" />
                                    <audio id='myaudio' src={o.music}></audio>
                                    <Icon id='okfalse' onClick={this.begin.bind(this)} style={{ fontSize: '2.5rem', color: 'white', display: 'block' }} type="play-circle-o" />
                                    <Icon id='okdown' onClick={this.begin.bind(this)} style={{ fontSize: '2.5rem', color: 'white', display: 'none' }} type="pause-circle-o" />
                                    <Icon onClick={this.nextBtn.bind(this)} style={{ fontSize: '2rem', color: 'white' }} type="step-forward" />
                                </div>
                            </div>
                        </div >
                    })
                }

            </div>
        )
    }
    //c
    oncli() {
        this.props.history.goBack('./music')
    }
    componentWillMount() {
        axios.post(IP + '/music', { _id: this.props.musallID[0] || '5b70eb132971ce0df69ef643' }).then(data => {
            console.log(data.data)
            this.setState({
                musall: [data.data],
                musallID: this.props.musallID[0]
            })
        })
        setTimeout(function () {
            let myAuto = document.getElementById('myaudio');
            let okdown = document.getElementById('okdown');
            let okfalse = document.getElementById('okfalse');
            okfalse.style.display = 'none',
                okdown.style.display = 'block'
            myAuto.play();

        }, 200);
        let time = setInterval(() => {
            let percent = this.state.percent + 1;

            this.setState({ percent });

        }, 1500)
    }

    begin() {
        let myAuto = document.getElementById('myaudio');
        let okdown = document.getElementById('okdown');
        let okfalse = document.getElementById('okfalse');
        if (myAuto.paused) {
            myAuto.play();
            document.getElementById("bg_bin").className = "imgs";
            okfalse.style.display = 'none'
            okdown.style.display = 'block'
        } else {
            myAuto.pause();
            document.getElementById("bg_bin").className = "";
            okfalse.style.display = 'block'
            okdown.style.display = 'none'
        }
    }
    nextBtn() {
        for (let i = 0; i < this.props.musa[0].musicId.length; i++) {
            if (this.props.musa[0].musicId[i] == this.state.musallID) {
                if (i < this.props.musa[0].musicId.length - 1) {
                    axios.post(IP + '/music', { _id: this.props.musa[0].musicId[i + 1] }).then(data => {
                        this.setState({
                            musall: [data.data],
                            musallID: this.props.musa[0].musicId[i + 1]
                        })
                        setTimeout(function () {
                            let myAuto = document.getElementById('myaudio');
                            let okdown = document.getElementById('okdown');
                            let okfalse = document.getElementById('okfalse');
                            okfalse.style.display = 'none',
                                okdown.style.display = 'block'
                            myAuto.play();
                        }, 200);
                    })
                }
            }
        }

    }
    lastBtn() {
        for (let i = 0; i < this.props.musa[0].musicId.length; i++) {
            if (this.props.musa[0].musicId[i] == this.state.musallID) {
                if (i > 0) {
                    console.log('ddggd')
                    axios.post(IP + '/music', { _id: this.props.musa[0].musicId[i - 1] }).then(data => {
                        this.setState({
                            musall: [data.data],
                            musallID: this.props.musa[0].musicId[i - 1]
                        })
                        setTimeout(function () {
                            let myAuto = document.getElementById('myaudio');
                            let okdown = document.getElementById('okdown');
                            let okfalse = document.getElementById('okfalse');
                            okfalse.style.display = 'none',
                                okdown.style.display = 'block'
                            myAuto.play();
                        }, 200);
                    })

                }
            }
        }
    }


}
function filters(states) {
    console.log(states)
    return { musallID: states.musicStr, musa: states.musicStrs }
}

export default connect(filters)(Musicall);