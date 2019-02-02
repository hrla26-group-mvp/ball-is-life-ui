import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from '../../styles/videos/Video.css';
import YOUTUBE_API_KEY from './config';
import { VideoItem } from './VideoItem';
import { VideoPlayer } from './VideoPlayer';

export default class Videos extends React.Component {
  // static propTypes = {
  //   videos: PropTypes.object.isRequired,
  //   // currentVideo: PropTypes.object.isRequired,
  // };
  componentWillMount() {
    const { getVideoData, changeCurrentVideo, videos } = this.props;
    const options = {
      part: 'snippet',
      key: YOUTUBE_API_KEY,
      q: 'nba highlights',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true',
    };

    axios.get('https://www.googleapis.com/youtube/v3/search', { params: options })
      .then(({ data }) => {
        console.log('items', data.items);
        getVideoData(data.items);
        changeCurrentVideo(data.items[0]);
      })
      .catch(err => console.error(err));
  }

  render() {
    const { videos, currentVideo, changeCurrentVideo } = this.props;
    return (
      <div className={styles.videocontainer}>
        <h2 className={styles.mainTitle}>Highlights</h2>
        <div className={styles.videoPlayer}>
          {currentVideo.map(element => (
            <VideoPlayer key={element.etag} title={element.snippet.title} videoId={element.id.videoId} desc={element.snippet.description} />
          ))}
        </div>
        <div className={styles.itemContainer}>
          {videos.map(element => (
            <VideoItem key={element.etag} video={element} changeCurrentVideo={changeCurrentVideo} title={element.snippet.title} thumbnail={element.snippet.thumbnails.high.url} description={element.snippet.description} />
          ))}
        </div>
      </div>
    );
  }
}