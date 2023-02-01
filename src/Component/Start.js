import "./step1.css";
import LGT from "../Asset/lgt.png";
import Main from "../Asset/Asset 58.png";
import { FaPlay } from "react-icons/fa";
import FB from "../Asset/Asset 52.png";
import INSTA from "../Asset/Asset 54.png";
import TWITTER from "../Asset/Asset 53.png";
import YOUTUBE from "../Asset/youtube.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Start() {
  const navigate = useNavigate();
  const [socialClicked, setSocialClicked] = useState(false);

  return (
    <>
      <div className="w-100 Main">
        <div className="container">
          <div className="content pt-4 text-center pb-5">
            <img
              alt="olineo-logo"
              src={LGT}
              height={30}
              width={100}
              style={{
                animation:
                  "brightness-animation infinite ease-in 1s alternate-reverse",
              }}
            />

            <br />
            <img
              alt="main-logo"
              className="logo-img"
              src={Main}
              height={200}
              width={200}
            />
            <br />
            <p className="start-to-play-text">TO PLAY</p>
            <p className="mt-4"> FOLLOW US ON </p>
            <a href="https://www.facebook.com/OLineOIndia/" target="_blank">
              <img
                alt="facebook"
                src={FB}
                width={40}
                onClick={(e) => setSocialClicked(true)}
                style={{
                  animation: "brightness-animation-game forwards infinite ease-in 500ms 0s alternate-reverse"
                }}
              />
            </a>
            <a
              className="pl-2 "
              href="https://www.instagram.com/olineoindia/"
              target="_blank"
            >
              <img
                alt="insta"
                src={INSTA}
                width={40}
                onClick={(e) => setSocialClicked(true)}
                style={{
                  animation: "brightness-animation-game forwards infinite ease-in 1s 500ms  alternate-reverse"
                }}
              />
            </a>
            <a
              href="https://twitter.com/olineoindia"
              target="_blank"
              className="pl-2 "
            >
              <img
                alt="twitter"
                src={TWITTER}
                width={40}
                onClick={(e) => setSocialClicked(true)}
                style={{
                  animation: "brightness-animation-game forwards infinite ease-in 1500ms 1s alternate-reverse"
                }}
              />
            </a>
            <a
              href="https://www.youtube.com/@OLineOIndia"
              target="_blank"
              className="pl-2 icon-container"
            >
              <img
                alt="youtube"
                src={YOUTUBE}
                width={40}
                onClick={(e) => setSocialClicked(true)}
                style={{
                  animation: "brightness-animation-game forwards infinite ease-in 2s 1500ms alternate-reverse"
                }}
              />
            </a>
            
            <br />
            {/* <button
              type="button"
              className="mt-4 btn w-50 text-center"
              style={{
                "background-color": "#650000",
                color: "white",
                "box-shadow": "0px 0px 22px 5px #e7a500a6",
              }}
            >
              <div className="d-flex align-items-center">
                <span className="ml-4 mr-3">Store</span>
                <FaStore className="ml-2" />
              </div>
            </button> */}
            <p className="text-warning mt-4" style={{ fontSize: "20px" }}>
              Ring your prize
            </p>
            <p className=" mt-4" style={{ color: "#aaaaaa" }}>
              Get a chance to win happiness <br /> ki deals!!
            </p>

            <button
              type="button"
              disabled={!socialClicked}
              onClick={() => navigate("/1")}
              className={
                socialClicked
                  ? "btn w-50 text-center btn-box-shadow"
                  : " btn w-50 text-center"
              }
              style={{
                borderRadius: "50px",
                backgroundColor: "#650000",
                color: "white",
              }}
            >
              <div
                className="d-flex align-items-center"
                style={{
                  justifyContent: "center",
                  maxWidth: "180px",
                  margin: "auto",
                }}
              >
                <span className="ml-4 mr-3">Play</span>
                <FaPlay className="ml-2" />
              </div>
            </button>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default Start;
