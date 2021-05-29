import React from 'react';

import bgVideo from '../assets/bg-video.mp4';

export default function FloatingScreens() {
  return (
    <div id="floating-screens" className="row">
      <div className="col video-text-container">
        <h3>
          now - is a fresh way to share the road and make new connections.
        </h3>
        <p>Choose to drive or ride with people already going your way.</p>
      </div>
      <div className="back-gradient"></div>
      <video playsInline autoPlay muted loop id="bgVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}
