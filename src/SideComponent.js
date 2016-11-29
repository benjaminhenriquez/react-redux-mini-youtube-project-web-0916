import React from 'react'
export default class SideComponent extends React.Component{

  clickedImage(event){
    event.preventDefault()
    this.props.swapVideos(event.target.id)
  }

  render(){
    return (
      <div>
        <h3>{this.props.video.snippet.channelTitle}</h3>
        <p>{this.props.video.snippet.description}</p>
        <img src={this.props.video.snippet.thumbnails.default.url} alt='0' id={this.props.video.id.videoId} onClick={this.clickedImage.bind(this)}/>
        <br/>
      </div>
    )
  }
}
