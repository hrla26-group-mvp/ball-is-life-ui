import React from 'react';
import styles from '../../styles/videos/videoPlayer.css';

export const VideoPlayer = ({ title, videoId, desc }) => (
  <div>
    <div className={styles.videoPlayer}>
      <img className={styles.imageHide} src={`http://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}/>
      <iframe width="560" height="349" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen="allowFullScreen"></iframe>
    </div>
    <div>
      <h3 className={styles.playerTitle}>
        {title}
      </h3>
    </div>
    {/* <div>
      {desc}
    </div> */}
  </div>
);