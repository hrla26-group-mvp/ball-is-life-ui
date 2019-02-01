import { connect } from 'react-redux';
import Videos from '../components/videos/Videos';
import { getVideoData, changeCurrentVideo } from '../actions/videoData';

const mapStateToProps = state => ({
  videos: state.videos,
  currentVideo: state.currentVideo,
});

const mapDispatchToProps = dispatch => ({
  getVideoData: (videos) => { dispatch(getVideoData(videos)); },
  changeCurrentVideo: (video) => { dispatch(changeCurrentVideo(video)); },
});

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Videos);

export default VideoContainer;