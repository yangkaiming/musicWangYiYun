import { combineReducers } from 'redux'
function musicStrs(state=[],action){
    switch(action.type){
        case 'MUSIC':return [action.strs]
        default:return state
    }
}
function musicStr(state=[],action){
    switch(action.type){
        case 'MUSICES':return [action.str]
        default:return state
    }
}
function localMusic(state=[],action){
    switch(action.type){
        case 'MYMUSIC':return action.local
        default:return state
    }
}
function todyMusic(state=[],action){
    switch(action.type){
        case 'TODYMUSIC':return [action.tody]
        default:return state
    }
}
export default combineReducers({
    musicStrs,musicStr,localMusic,todyMusic
})