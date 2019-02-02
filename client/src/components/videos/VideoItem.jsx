import React from 'react';
import { currentVideo } from '../../reducers/videoReducer';
import styles from '../../styles/videos/videoItem.css';

export const VideoItem = ({ video, changeCurrentVideo, title, thumbnail, description}) => (
  <div className={styles.itemContainer}>
    <div className={styles.subContainer}>
      <div className={styles.itemThumbnail}>
        <div className={styles.thumb}>
          <img width="168" height="125" onClick={() => changeCurrentVideo(video)} src={thumbnail} alt="" />
        </div>
      <div className={styles.itemTitle} onClick={() => changeCurrentVideo(video)}>
        <div className={styles.text}>
          {title}
        </div>
      </div>
      </div>
      {/* <div>
        {description}
      </div> */}
    </div>
  </div>
);


