import React from 'react';
import { currentVideo } from '../../reducers/videoReducer';

export const VideoItem = ({ video, changeCurrentVideo, title, thumbnail, description}) => (
  <div>
    <img src={thumbnail} alt="" />
    <div onClick={() => changeCurrentVideo(video)}>
      {title}
    </div>
    <div>
      {description}
    </div>
  </div>
);


