var VideoList = (prop) => (
  prop.videos.map(vid => (<div><h5><em><VideoListEntry video={vid}/></em></h5></div>)) 
 
  //<div><h5><em><VideoListEntry video={prop.videos[0]}/></em></h5></div>
  //<div><h5><em><VideoListEntry video={prop.videos[0]}/></em> view goes here</h5></div>
);

ReactDOM.render(
  <VideoList videos = {window.exampleVideoData} />,
  document.getElementByClassName('col-md-5')
 ); 

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

console.log('test');



// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

  /*<div className="video-list">
    <h5>
      <em>
      videoListEntry
      </em>
      {prop.videos.map(video => 
        <VideoListEntry video={video} />
      )}
    </h5>
  </div> */