import "./step1.css";
import DOM from "../Asset/dom.png";
import Left from "../Asset/left.png";
import Right from "../Asset/right.png";
import Table from "../Asset/table.png";
import logo from "../Asset/lg.png";
import RingF from "../Asset/Asset 49.png";
import floatRing from "../Asset/Asset 50.png";
import horizontalLink from "../Asset/horizontalRing.png";
import { useEffect, useRef, useState } from "react";
import { sendGiftService } from "../service/gift.service";
import { useNavigate } from "react-router-dom";
import Absolute from "../Asset/Absolute.png";
import Neckband from "../Asset/neckband.png";
import TwentyPercent from "../Asset/20Percent.png";
import FiveThousandCB from "../Asset/5000CB.png";
import FifteenPercentCB from "../Asset/FifteenPercentCB.png";
import TenPercentCB from "../Asset/TenPercentCB.png";
import FiftyCB from "../Asset/FiftyCB.png";
import HundredCB from "../Asset/HundredCB.png";
import TwoHundredCB from "../Asset/TwoHundredCB.png";

function Game() {
  const [currentRing, setcurrentRing] = useState(floatRing);
  //   -50  0  50

  const [mainRingMargin, setmainRingMargin] = useState(0);
  const [image, setImage] = useState(false);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    console.log(touchStart, touchEnd)
    if (touchStart - touchEnd > 5) {
      // do your stuff here for left swipe
      setRingLeft();
    }

    if (touchStart - touchEnd < -5) {
      // do your stuff here for right swipe
      setRingRight();
    }
  }

  const setRingLeft = () => {
    setmainRingMargin(-90);
    document.getElementById("dot-left").focus();
  };

  const setRingRight = () => {
    setmainRingMargin(90);
    document.getElementById("dot-right").focus();
  };

  const setRingMiddle = () => {
    setmainRingMargin(0);
    document.getElementById("dot-middle").focus();
  };

  const navigate = useNavigate();
  const [position, setPosition] = useState({
    pos: "",
  });
  const [ring, setRing] = useState(false);
  // eslint-disable-next-line no-restricted-globals
  const [screenHeight, setScreenHeight] = useState(window.screen.height);
  const box = useRef(null);

  useEffect(() => {
    if(!localStorage.getItem("storename") ||
      !localStorage.getItem("store_id") ||
      !localStorage.getItem("user_name") ||
      !localStorage.getItem("user_email"))
    navigate("/")
    function handleResize() {
      setScreenHeight(window.screen.height);
    }

    window.addEventListener("resize", handleResize);
    window.scrollTo(0, 0);

    document.querySelectorAll(".ring-direction-container > button")[1]?.focus();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [state, setState] = useState({
    yoffset: 0,
    xoffset: 0,
    displayRing: true,
  });

  const fit = useRef(null);
  const fit2 = useRef(null);
  const fit3 = useRef(null);
  const fit4 = useRef(null);
  const fit5 = useRef(null);

  const fit6 = useRef(null);
  const fit7 = useRef(null);
  const fit8 = useRef(null);
  const fit9 = useRef(null);

  useEffect(() => {}, [position?.pos]);
  async function handleMouseDown(e) {
    setImage(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
    setRing(true);
    setState((p) => ({ ...p, displayRing: false }));
    const data = await getGift();
    // const data = { data: { gift_data: ["Cashback ( Rs. 50 )"] } };
    setTimeout(() => {
      setcurrentRing(horizontalLink);
    }, 800);

    setTimeout(() => {
      navigate("/prize");
    }, 1200);

    localStorage.setItem("gift", data.data.gift_data[0]);

    // Done Position fixed with direction ======================================
    if (data.data.gift_data[0] == "Absolute Store") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            120 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            120 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            120,
        }));
      }

      //fixed
      if (fit5.current.x > 176) {
        setState((p) => ({
          ...p,
          xoffset:
            fit5.current.x - 95 - (fit5.current.x - 176 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit5.current.x - 95 - mainRingMargin,
        }));
      }

      // Done Position with direction======================================
    } else if (data.data.gift_data[0] == "Unix Neckband") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            120 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            120 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            120,
        }));
      }

      // fixed
      if (fit3.current.x > 216) {
        setState((p) => ({
          ...p,
          xoffset:
            fit3.current.x - 300 - (fit3.current.x - 216 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit3.current.x - 300 - mainRingMargin,
        }));
      }

      // Done Position with direction======================================
    } else if (data.data.gift_data[0] == "10% Discount on accessories") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170,
        }));
      }

      //fixed position
      if (fit9.current.x > 269) {
        setState((p) => ({
          ...p,
          xoffset:
            fit9.current.x - 110 - (fit9.current.x - 269 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit9.current.x - 110 - mainRingMargin + 43,
        }));
      }
    }

    // Done Position with direction=======================================
    else if (data.data.gift_data[0] == "15% Discount on accessories") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170,
        }));
      }
      if (fit5.current.x > 176) {
        setState((p) => ({
          ...p,
          xoffset:
            fit5.current.x - 165 - (fit5.current.x - 176 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit5.current.x - 165 - mainRingMargin,
        }));
      }
      // Done Position with direction =======================================
    } else if (data.data.gift_data[0] == "20% Discount on accessories") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            170,
        }));
      }

      if (fit2.current.x > 116) {
        setState((p) => ({
          ...p,
          xoffset:
            fit2.current.x - 250 - (fit2.current.x - 116 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit2.current.x - 220 - mainRingMargin,
        }));
      }
    }

    // Done Position ==========================================
    else if (data.data.gift_data[0] == "Cashback ( Rs. 50 )") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220,
        }));
      }

      if (fit7.current.x > 84) {
        setState((p) => ({
          ...p,
          xoffset: fit7.current.x + 75 - (fit7.current.x - 84 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit7.current.x + 75 - mainRingMargin,
        }));
      }
      // Done Position ==========================================
    } else if (data.data.gift_data[0] == "cashback ( Rs. 100 )") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220,
        }));
      }
      if (fit5.current.x > 176) {
        setState((p) => ({
          ...p,
          xoffset:
            fit5.current.x - 165 - (fit5.current.x - 176 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit5.current.x - 165 - mainRingMargin,
        }));
      }

      // Done Position ==========================================
    } else if (data.data.gift_data[0] == "cashback ( Rs. 200 )") {
      if (window.screen.height > 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220 +
            (window.screen.height - 460),
        }));
      } else if (window.screen.height < 460) {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220 -
            (460 - window.screen.height),
        }));
      } else {
        setState((p) => ({
          ...p,
          yoffset:
            window.screen.height -
            window.screen.height -
            window.screen.height +
            220,
        }));
      }
      if (fit2.current.x > 116) {
        setState((p) => ({
          ...p,
          xoffset:
            fit2.current.x - 250 - (fit2.current.x - 116 + mainRingMargin),
        }));
      } else {
        setState((p) => ({
          ...p,
          xoffset: fit2.current.x - 250 - mainRingMargin,
        }));
      }
    }
  }

  const storeId = localStorage.getItem("store_id");

  const getGift = async () => {
    const payload = {
      store_id: parseInt(storeId),
    };
    return await sendGiftService(payload);
  };


  return (
    <>
      <div className="d-flex justify-content-center Theme">
        <div className="w-100 Mian" style={{ position: "relative" }}>
          <div className="main__container text-center">
            <img alt="" className="h-30 main__dom " src={DOM} height={170} />
            <img
              alt=""
              src={logo}
              height={50}
              width={150}
              style={{
                "margin-top": "-3.5rem",
                "margin-left": "auto",
                "margin-right": "auto",
                animation:
                  "brightness-animation infinite ease-in 1s alternate-reverse",
              }}
            />
          </div>
          <div
            className="d-flex justify-content-between"
            style={{
              position: "relative",
              minHeight: "385px",
            }}
          >
            <img alt="" src={Left} height={400} className="curtains" />

            <div id="stage-container">
              <img
                alt=""
                src={Table}
                style={{
                  "margin-top": "30%",
                  "z-index": "1",
                  width: "230px",
                  scale: "1.2",
                }}
              />

              <img
                alt=""
                src={FiveThousandCB}
                height={50}
                width={50}
                className=""
                style={{
                  "margin-top": "-165%",
                  "margin-left": "5.5rem",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 800ms ease-in infinite  forwards reverse",
                }}
                ref={fit}
              />

              <img
                alt=""
                src={Neckband}
                height={40}
                width={40}
                className=""
                style={{
                  "margin-top": "-140%",
                  "margin-left": "-5.5rem",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 800ms ease-in infinite 400ms forwards reverse",
                }}
                ref={fit2}
              />

              <img
                alt=""
                src={Absolute}
                height={50}
                width={50}
                className=""
                style={{
                  "margin-top": "-135%",
                  "margin-left": "2.5rem",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 1200ms ease-in infinite 800ms forwards reverse",
                }}
                ref={fit3}
              />

              <img
                alt=""
                src={TwentyPercent}
                height={50}
                width={50}
                className="ml-4 "
                style={{
                  "margin-top": "-110%",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 1600ms ease-in infinite 1200ms forwards reverse",
                }}
                ref={fit4}
              />
              <img
                alt=""
                src={FifteenPercentCB}
                height={50}
                width={50}
                className="ml-4"
                style={{
                  "margin-top": "-110%",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 2s ease-in infinite 1600ms forwards reverse",
                }}
                ref={fit5}
              />

              <img
                alt=""
                src={TenPercentCB}
                height={50}
                width={50}
                className="ml-4"
                style={{
                  "margin-top": "-110%",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 2400ms ease-in infinite 2s forwards reverse",
                }}
                ref={fit6}
              />

              <img
                alt=""
                src={TwoHundredCB}
                height={50}
                width={50}
                className="ml-4 "
                style={{
                  "margin-top": "-88%",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 2800ms ease-in 2400ms infinite  forwards ",
                }}
                ref={fit7}
              />

              <img
                alt=""
                src={HundredCB}
                height={50}
                width={50}
                className="ml-4 "
                style={{
                  "margin-top": "-88%",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 3200ms ease-in infinite 2800ms forwards reverse",
                }}
                ref={fit8}
              />

              <img
                alt=""
                src={FiftyCB}
                height={50}
                width={50}
                className="ml-4 "
                style={{
                  "margin-top": "-88%",
                  scale: "1.3",
                  animation:
                    "brightness-animation-game 3600ms ease-in infinite 3200ms  forwards reverse",
                }}
                ref={fit9}
              />
            </div>

            <img
              alt=""
              brightness-animation
              src={Right}
              height={400}
              style={{ right: 0 }}
              className="curtains"
            />
          </div>

          <div
            className={`${
              state?.displayRing ? "ring__main" : "ring__main__float"
            }`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "320px",
              flexDirection: "column",
              marginTop: `${
                state?.displayRing ? "-106px !important" : `${state?.yoffset}px`
              }`,
              transition: "500ms ease-in-out",
            }}
          >
            <img
              alt="ring"
              style={{
                transition: "1s ease-in-out",
                display: "block",
                "margin-left": `${mainRingMargin + state?.xoffset}px`,
                scale: state?.displayRing ? "220%" : "100%",
                animation: "rotation 5s linear infinite alternate-reverse",
                
              }}
              id="ring-image"
              ref={box}
              onMouseDown={(e) => {
                handleMouseDown(e);
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}

              src={ring === false ? RingF : currentRing}
              height={70}
              width={70}
            />

            <br />
            <br />
            {!image ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
                className="ring-direction-container"
              >
                <button
                  className="border-0 bg-white text-white m-1 rounded-circle"
                  onClick={(e) => {
                    setRingLeft();
                  }}
                  id="dot-left"
                >
                  .
                </button>
                <button
                  className="border-0 bg-white text-white m-1 rounded-circle"
                  onClick={(e) => {
                    setRingMiddle();
                  }}
                  id="dot-middle"
                >
                  .
                </button>
                <button
                  className="border-0 bg-white text-white m-1 rounded-circle "
                  onClick={(e) => {
                    setRingRight();
                  }}
                  id="dot-right"
                >
                  .
                </button>
              </div>
            ) : (
              <></>
            )}

            <h6>Click to Play</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
