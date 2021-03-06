import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectImage } from "../../features/appSlice";
import "./ChatView.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function ChatView() {
  const selectedImage = useSelector(selectImage);
  const history = useHistory();

  useEffect(() => {
    if (!selectImage) {
      exit();
    }
  }, []);

  const exit = () => {
    history.replace("/chats");
  };
  return (
    <div className="chatView">
      <img src={selectImage} onClick={exit} alt="" />
      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#004777", 0.33],
            ["#F7BB01", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }

            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView;
