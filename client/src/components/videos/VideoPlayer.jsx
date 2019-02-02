import React from 'react';

export const VideoPlayer = ({ title, videoId, desc }) => (
  <div>
    <iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen="allowFullScreen"></iframe>
    <div>
      <h3>
        {title}
      </h3>
    </div>
    <div>
      {desc}
    </div>
  </div>
);