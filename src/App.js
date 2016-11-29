import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchVideos } from './actions'
import { switchVideos } from './actions'
import { bindActionCreators} from 'redux'
import MainComponent from './MainComponent'
import SideComponent from './SideComponent'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.findVideos = this.findVideos.bind(this)
  }

  findVideos(event){
    event.preventDefault();
    let searchTerm = event.target.children[0].value
    console.log(searchTerm);
    this.props.findVids(searchTerm)
  }

  swapVideos(number){
    let newMain = this.props.sideVids.filter((vid) => {
        return vid.id.videoId === number
      })
    let newSides = this.props.sideVids.filter((vid) => {
        return vid.id.videoId !== number
      })
    newSides.push(Object.assign({},this.props.mainVid))
    debugger
    this.props.switchVids(newMain, newSides)
  }



  render() {
    let display = ''
    let sideBar = []
    if(this.props.sideVids.length > 0){
      display = <MainComponent video={this.props.mainVid} />
      sideBar = this.props.sideVids.map((video)=>{
        return <SideComponent video={video} swapVideos={this.swapVideos.bind(this)}/>
      })
    }
    return (
      <div className="App">
        <form onSubmit={this.findVideos}>
          <input type='text' placeholder='Enter your seach term here' />
          <button type='submit'>Search</button>
        </form>
        <section className="section">
          {display}
        </section>
        <aside className="aside">
          {sideBar}
        </aside>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ findVids: fetchVideos, switchVids: switchVideos}, dispatch)
}
function mapStateToProps(state){
  return { mainVid: state.mainVid, sideVids: state.sideVids }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

// switchVids(numbah){
//   this.props.sideVids.push(this.props.mainVid)
//   debugger
//   this.props.mainVid = this.props.sideVids.filter((vid) => {
//     return vid.id.videoId === numbah
//   })
//   this.props.sideVids = this.props.sideVids.filter((vid) => {
//     return vid.id.videoId !== numbah
//   })
//   this.forceUpdate()
// }
