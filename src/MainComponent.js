import React from 'react'
export default class MainComponent extends React.Component{
  render(){
    return (
      <div>
        <h3>{this.props.video.snippet.channelTitle}</h3>
        <p>{this.props.video.snippet.description}</p>
        <iframe src={"https://www.youtube.com/embed/" + this.props.video.id.videoId} height='380' width='420'/>
      </div>
    )
  }
}
