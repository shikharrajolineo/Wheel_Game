import Absolute from "../Asset/Absolute.png";
import Neckband from "../Asset/neckband.png";
import TwentyPercent from "../Asset/20Percent.png";
import FiveThousandCB from "../Asset/5000CB.png";
import FifteenPercentCB from "../Asset/FifteenPercentCB.png";
import TenPercentCB from "../Asset/TenPercentCB.png";
import FiftyCB from "../Asset/FiftyCB.png";
import HundredCB from "../Asset/HundredCB.png";
import TwoHundredCB from "../Asset/TwoHundredCB.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";

function Fith() {
  const navigate = useNavigate();

  const imageArray = useMemo(() => [
    FiveThousandCB,
    Absolute,
    Neckband,
    TwentyPercent,
    FifteenPercentCB,
    TenPercentCB,
    TwoHundredCB,
    HundredCB,
    FiftyCB,
  ]);

  useEffect(() => {
    document.addEventListener("scroll", scaleImage);
    function scaleImage() {
      
      document.querySelectorAll(".offer-images").forEach((image) => {
        if (
          Math.round(image.getBoundingClientRect().y) >= 70 &&
          Math.round(image.getBoundingClientRect().y <= 230)
        ) {
          image.classList.remove("fifth-image-animation-end");
          image.classList.add("fifth-image-animation-start");
          
        } else {
          image.classList.remove("fifth-image-animation-start")
          image.classList.add("fifth-image-animation-end")
        }
      });
    }
    return () => document.removeEventListener("scroll", scaleImage);
  }, []);

  return (
    <>
      <div className="w-100 Main2">
        <div id="fifth-page-heading">Scroll down to check out the prizes</div>
        <div className="container text-center">
          {imageArray.map((image, index) => (
            <div key={index} className="offer-images">
              <img alt={"gift" + index} src={image} height={200} width={200} style={{margin: "10px 0"}}/>
            </div>
          ))}
          

          <button
            className="btn btn-warning"
            type="button"
            style={{ margin: "60px 0" }}
            onClick={() => navigate("/game")}
          >
            Let's Play
          </button>
        </div>
      </div>
    </>
  );
}
export default Fith;
