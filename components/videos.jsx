import React, { useRef, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleFilledOutlined";

const Videos = ({ url, title, subtitle }) => {
  const [IsPause, setIsPause] = useState(false);
  const videoRef = useRef(null);

  const handelPlayVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPause(true);
    } else {
      videoRef.current.pause();
      setIsPause(false);
    }
  };
  return (
    <section className="w-full h-auto flex gap-5 flex-col p-3">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[4rem] font-bold pl-5">{title}</h1>
        <p className="text-xl leading-7 text-nowrap pr-5"     dangerouslySetInnerHTML=
          {{
            __html: `${subtitle}`,
          }}>
        </p>
      </div>
      <div className="aspect-video aspect-w-16 aspect-h-9 flex justify-center relative px-10">
        <video
          ref={videoRef}
          loading="lazy"
          autoPlay
          muted
          loop
          controls={false}
          playsInline
          className="rounded-3xl w-full h-full  object-cover"
        >
          <source src={url} type="video/mp4" />
        </video>

        <div className="absolute bottom-1 right-0 transform -translate-x-1/2 -translate-y-1/2">
          <button className="px-6 py-1" onClick={handelPlayVideo}>
            {IsPause ? (
              <PauseCircleOutlineIcon
                style={{ fontSize: 36, color: "white" }}
              />
            ) : (
              <PlayCircleOutlineIcon style={{ fontSize: 36, color: "white" }} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
