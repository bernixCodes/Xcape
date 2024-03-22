import { useState } from "react";
import YouTube from "react-youtube";
import "./index.css";

const VideoBanner = () => {
  const [videoId, setVideoId] = useState("");

  const handlePlayIconClick = (videoId) => {
    setVideoId(videoId);
  };

  const handleCloseClick = () => {
    setVideoId("");
  };

  const onPlayerStateChange = (event) => {
    if (event.data === YouTube.PlayerState.ENDED) {
      setVideoId("");
    }
  };
  return (
    <div className="youTube-div">
      <div className="stats-banner">
        <div className="stats-banner-info">
          <h2>
            Are you ready to <span style={{ color: "#afa062" }}>xcape</span>{" "}
            with us?
          </h2>
          <p>
            Discover the extraordinary with Xcape, where every journey is a
            thrilling escape from the ordinary.
          </p>
          {videoId ? (
            <></>
          ) : (
            <>
              <a
                className="glightbox_video"
                onClick={() => handlePlayIconClick("xuP4g7IDgDM")}
              >
                <svg
                  width="131"
                  height="131"
                  viewBox="0 0 131 131"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="inner-circle"
                    d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                    fill="white"
                  ></path>
                  <circle
                    className="outer_circle"
                    cx="65.5"
                    cy="65.5"
                    r="64"
                    stroke="white"
                  ></circle>
                  <path
                    className="play"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M60 76V57L77 66.7774L60 76Z"
                    fill="#BF2428"
                  ></path>
                </svg>
              </a>
            </>
          )}
        </div>
      </div>

      <div className="youtube-player" style={{ zIndex: "10" }}>
        {videoId && (
          <YouTube
            videoId={videoId}
            opts={{
              height: "700px",
              width: "100%",
              playerVars: {
                autoplay: 1,
                controls: 1,
              },
            }}
            onReady={(e) => e.target.playVideo()}
            onStateChange={onPlayerStateChange}
          />
        )}

        {videoId && (
          <button className="close-yt" onClick={handleCloseClick}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoBanner;
