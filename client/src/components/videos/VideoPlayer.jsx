import React from 'react';

export const VideoPlayer = ({ title, videoId, desc }) => (
  <div>
    <iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
    <div>
      <h3>
        {title}
      </h3>
    </div>
    <div>
      {desc}
    </div>
  </div>
    // currentVideo === {} ? (<div> Please wait...</div>)
    //   : (
    //     <div>
    //       <div>
    //         {/* <iframe src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} allowFullScreen /> */}
    //       </div>
    //       <div>
    //         <h3>
    //           {currentVideo.snippet.title}
    //         </h3>
    //         <div>
    //           {currentVideo.snippet.description}
    //         </div>
    //       </div>
    //     </div>
    //   )
);