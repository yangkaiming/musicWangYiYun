import React, { Component } from 'react';
//--------------------搜索-------------------------//
import Search from './search'
//----------------------音乐------------------------//
import Music from './music'
//----------------------歌曲-------------------------//
import Musicall from './musicall'
//---------------------本地音乐---------------------//
import LocalMusic from './localMusic'
//-------------------------最近播放-----------------//
import TodyMusic from './todyMusic'
import 'antd/dist/antd.css';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Main from './main'
//react-redux的容器
import { Provider } from "react-redux";
import Store from './sort/short.js'
class App extends Component {
    //view
    render() {
        return (
            <div>
                <Provider store={Store} >
                    <Router>
                        <div>
                            <Route path="/search" component={Search} />
                            <Route path="/musicall" component={Musicall} />
                            <Route path="/music" component={Music} />
                            <Route path="/main" component={Main} />
                            <Route path="/localMusic" component={LocalMusic} /> 
                            <Route path="/todyMusic" component={TodyMusic} />   
                              
                                                     
                        </div>
                    </Router>
                </Provider>
            </div>
        )
    }

}
export default App;

