var VideoList = (prop) => (
  <div className="video-list"> 
   {prop.videos.map ((vid) => (<div><h5><em><VideoListEntry video={vid}/></em></h5></div>))} 
  </div>
);

ReactDOM.render(
  <VideoList videos = {window.exampleVideoData} />,
  document.getElementsByClassName('.col-md-5')
 ); 


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};




// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

  /*<div className="video-list">
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
//prop.videos.forEach(vid => ($(".col-md-5").append(<div><h5><em><VideoListEntry video={vid}/></em></h5></div>)))
  </div> */
//<div><h5><em><VideoListEntry video={prop.videos[0]}/></em></h5></div> 