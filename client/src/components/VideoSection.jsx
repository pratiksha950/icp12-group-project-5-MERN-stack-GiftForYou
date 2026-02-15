import React from "react";
import giftVideo from "../assets/home.mp4";

function VideoSection() {
  return (
    <div className="w-full py-4 flex justify-center">
      <video
        src={giftVideo}
        autoPlay
        loop
        muted
        className="w-full max-w-6xl h-[450px] object-cover rounded-xl shadow-lg"
      />
    </div>
  );
}

export default VideoSection;
