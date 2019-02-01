import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/videos/Video.css';
import axios from 'axios';
import YOUTUBE_API_KEY from './config';
import { VideoItem } from './VideoItem';

export default class Videos extends React.Component {
  // static propTypes = {
  //   videos: PropTypes.object.isRequired,
  //   // currentVideo: PropTypes.object.isRequired,
  // };
  componentWillMount() {
    const { getVideoData, changeCurrentVideo, videos } = this.props;
    const options = {
      part: "snippet",
      key: YOUTUBE_API_KEY,
      q: "nba highlights",
      maxResults: 5,
      type: "video",
      videoEmbeddable: "true"
    };

  axios.get('https://www.googleapis.com/youtube/v3/search', { params: options })
      .then(({ data }) => {
        console.log('items', data.items);
        getVideoData(data.items);
      })
      .catch(err => console.error(err));
    }


  render() {
    const { videos, currentVideo, changeCurrentVideo } = this.props;
    return (
      <div>
        {console.log('got videos', videos)}
        {console.log('currentvideo is ', currentVideo)}
        <h3>Highlights</h3>
        <div>
          {videos.map(element => (
            <VideoItem key={element.etag} video={element} changeCurrentVideo={changeCurrentVideo} title={element.snippet.title} thumbnail={element.snippet.thumbnails.default.url} description={element.snippet.description} />
          ))}
        </div>
      </div>
    );
  }
}