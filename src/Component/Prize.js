import "./step1.css";

import Absolute from "../Asset/Absolute.png";
import Neckband from "../Asset/neckband.png";
import TwentyPercent from "../Asset/20Percent.png";
import FiveThousandCB from "../Asset/5000CB.png";
import FifteenPercentCB from "../Asset/FifteenPercentCB.png";
import TenPercentCB from "../Asset/TenPercentCB.png";
import FiftyCB from "../Asset/FiftyCB.png";
import HundredCB from "../Asset/HundredCB.png";
import TwoHundredCB from "../Asset/TwoHundredCB.png";
import facebook from "../Asset/Asset 52.png";
import instagram from "../Asset/Asset 54.png"; 
import whatapp from "../Asset/Asset 55.png";
import twitter from "../Asset/Asset 53.png";
import { useEffect, useState } from "react";
import re from "../Asset/re.png";
import { RWebShare } from "react-web-share";

function Prize(props) {
  const [image, setimage] = useState();



  const gift = localStorage.getItem("gift");
  useEffect(() => {
    if (gift == "Absolute Store") {
      setimage(Absolute);
    } else if (gift == "Unix Neckband") {
      setimage(Neckband);
    } else if (gift == "10% Discount on accessories") {
      setimage(TenPercentCB);
    } else if (gift == "15% Discount on accessories") {
      setimage(FifteenPercentCB);
    } else if (gift == "20% Discount on accessories") {
      setimage(TwentyPercent);
    } else if (gift == "Cashback ( Rs. 50 )") {
      setimage(FiftyCB);
    } else if (gift == "cashback ( Rs. 100 )") {
      setimage(HundredCB);
    } else if (gift == "cashback ( Rs. 200 )") {
      setimage(TwoHundredCB);
    }

   localStorage.removeItem("store_id");
   localStorage.removeItem("storename");
   localStorage.removeItem("user_name");
   localStorage.removeItem("user_email");
   localStorage.removeItem("gift");

  }, []);

 

  return (
    <>
      <div
        className="d-flex justify-content-center Theme"
        style={{ overflow: "hidden" }}
      >
        <div className="w-100 Main2  ">
          <div className="text-center">
            <img
              className="position-sticky bts"
              style={{
                animation:
                  "brightness-animation infinite ease-in 1s alternate-reverse",
              }}
              src={re}
              height={200}
              width={300}
              alt=""
            />
          </div>
          <div className="outer-2">
            <img
              class="img  bts"
              src={
                "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
              }
              height={300}
              width={300}
              alt="tenor"
              border="0"
            />
          </div>
          <div className="outer-3">
            <img
              class="img  bts"
              src={
                "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
              }
              height={300}
              width={300}
              alt="tenor"
              border="0"
            />
          </div>
          <div className="outer-1">
            <img
              class="img  bts"
              src={
                "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
              }
              height={300}
              width={300}
              alt="tenor"
              border="0"
            />
          </div>

          <div className="main-prize">
            <img
              alt="main-prize"
              className="pt  bts"
              src={image}
              height={200}
              width={200}
            />
          </div>
          {/* {props.Fifty === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={Fifty}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}
          {props.ABS === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={ABS}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}
          {props.Head === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={Head}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}

          {props.Twenty === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={Twenty}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}
          {props.Fip === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={Fip}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}
          {props.ten === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={ten}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}

          {props.tHun === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={tHun}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}
          {props.Hun === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={Hun}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )}
          {props.CashB === true ? (
            <img
              alt=""
              className="position-sticky bts"
              src={CashB}
              height={200}
              width={200}
              style={{ top: "20%", left: "20%" }}
            />
          ) : (
            ""
          )} */}

          <div className="container text-center mt-3">
            <h4>
              Thank You For Visiting at <br />
              O-LINE-O
            </h4>
            <br />
            <RWebShare
              data={{
                text: `Hey! Check out this amazing game ‘Deal Chahta Hai’ by O-LINE-O India and win assured prizes. Play here`,
                url: "https://dealchahtahai.olineoindia.com",
                title: "Share among friends and family",
      
              }}
            >
              <button
                className="btn w-100 btn-warning"
                style={{
                  maxWidth: "200px",
                  margin: "auto",
                  color: "black",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              
              >
                Share
              </button>
            </RWebShare>
          </div>
          <br />

          <div className=" p-3 d-flex justify-content-center">
            <a
              href="https://www.facebook.com/OLineOIndia/"
              target="_blank"
              className=""
            >
              <img
                alt="facebook"
                className="rounded"
                src={facebook}
                height={35}
                width={35}
              />
            </a>
            <a
              className="pl-2 "
              href="https://www.instagram.com/olineoindia/"
              target="_blank"
            >
              <img
                alt="instagram"
                className="rounded"
                src={instagram}
                height={35}
                width={35}
              />
            </a>
            <a className="pl-2 " href="https://wa.me/+916390063900?text=Hello%20OLineO%20India" target="_blank">
              <img
                alt="whatsapp"
                className="rounded"
                src={whatapp}
                height={35}
                width={35}
              />
            </a>
            <a
              className="pl-2 "
              href="https://twitter.com/olineoindia"
              target="_blank"
            >
              <img
                alt="twitter"
                className="rounded"
                src={twitter}
                height={35}
                width={35}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prize;
