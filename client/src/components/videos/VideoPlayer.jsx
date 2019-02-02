import React from 'react';
import styles from '../../styles/videos/videoPlayer.css';

export const VideoPlayer = ({ title, videoId, desc }) => (
  <div>
    <div className={styles.containerOne}>
      <div className={styles.videoPlayer}>
        <iframe width="480" height="360" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allowFullScreen="allowFullScreen" />
      </div>
      <div>
        <h3 className={styles.playerTitle}>
          {title}
        </h3>
      </div>
    </div>
    {/* <div>
      {desc}
    </div> */}
  </div>
);