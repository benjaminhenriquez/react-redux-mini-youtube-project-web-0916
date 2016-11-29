import { combineReducers } from 'redux'

function reducerMain(state = [], action){

  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload.data.items[0]
    case "SWITCH_VIDEOS":
      return action.payload.mainVid[0]
    default:
      return state
  }
}

function reducerSides(state=[], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload.data.items.slice(1)
    case "SWITCH_VIDEOS":
      return action.payload.sideVid
    default:
      return state
  }
}

const rootReducer = combineReducers({mainVid: reducerMain, sideVids: reducerSides})

export default rootReducer
