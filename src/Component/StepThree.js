import "./step1.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Blink from "../Asset/blink.png";
import Heart from "../Asset/h.png";
import Smile from "../Asset/smile.png";
import Laugh from "../Asset/laugh.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendCatService } from "../service/category.service";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

function StepThree() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("storename") || !localStorage.getItem("user_name") || !localStorage.getItem("user_email"))
    navigate("/")
  }, [navigate])

  const handleClick = (e) => {
    document
      .querySelectorAll(".rating-icon")
      .forEach((icon) => (icon.style.scale = "1"));
    e.target.style.scale = "1.8";
  };

  const name = localStorage.getItem("user_name");
  const email = localStorage.getItem("user_email");



  const handleSubmit = async () => {
    try {
      if(selected === "") return toast.error("Please Select Product Information")
      const payload = { name, email, category: selected };
      const res = await sendCatService(payload);
      if (res.status === 200) {
        navigate("/fifth");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-100 Main2">
        <div className="container">
          <div
            className="content pl-3 d-flex"
            style={{ justifyContent: "center" }}
          >
            <h5 style={{ paddingTop: "40px" }}>Claim Your Reward.</h5>
          </div>

          <div className="container mt-3">
            <p>3. Products you may be interested in:</p>
            <select
              onChange={(e) => setSelected(e.target.value)}
              className="form-control mt-2"
              type="text"
              placeholder="Category"
            >
              <option value="">Please Select Category</option>
              <option value="Consumer Electronics">Consumer Electronics</option>
              <option value="Mobile and Tablets">Mobile and Tablets</option>
            </select>
            <hr className="mt-5" style={{ "border-top": " 1px solid grey" }} />
            <br />
            <div className="text-center mt-2">
              <span>How would you rate your experience at <br />O-LINE-O?</span>
              <div className="d-flex m-2 justify-content-center">
                <span
                  className="bg-white p-1  m-2"
                  style={{ "border-radius": "50%" }}
                >
                  <img
                    alt=""
                    onClick={handleClick}
                    className="rating-icon"
                    src={Laugh}
                    height={30}
                    width={30}
                  />
                </span>
                <span
                  className="bg-white  p-1 m-2"
                  style={{ "border-radius": "50%" }}
                >
                  <img
                    alt=""
                    className="rating-icon"
                    onClick={handleClick}
                    src={Blink}
                    height={30}
                    width={30}
                  />
                </span>

                <span
                  className="bg-white p-1 m-2"
                  style={{ "border-radius": "50%" }}
                >
                  <img
                    alt=""
                    className="rating-icon"
                    onClick={handleClick}
                    src={Smile}
                    height={30}
                    width={30}
                  />
                </span>
                <span
                  className="bg-white p-1 m-2"
                  style={{ "border-radius": "50%" }}
                >
                  <img
                    alt=""
                    className="rating-icon"
                    onClick={handleClick}
                    src={Heart}
                    height={30}
                    width={30}
                  />
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <p className="" style={{ "font-size": "10px" }}>
                  SATISFACTORY
                </p>
                <p className="  mx-2" style={{ "font-size": "10px" }}>
                  GOOD
                </p>
                <p className="  mx-2" style={{ "font-size": "10px" }}>
                  AMAZING
                </p>
                <p className=" mx-2" style={{ "font-size": "10px" }}>
                  EXCELLENT
                </p>
              </div>
            </div>
            <br />

            <button
              onClick={handleSubmit}
              type="button"
              class="btn btn-warning mt-4 w-100"
            >
              Continue
            </button>
            <hr
              className="mt-5"
              style={{ "border-top": " 1px solid rgb(248 158 158 / 58%)" }}
            />

            <ProgressBar className="mt-3" variant="warning" now={66} />
            <div className="row text-center">
              <div className="col-4 text-warning"> Step 1</div>
              <div className="col-4 text-warning"> Step 2</div>
              <div className="col-4 text-warning"> Step 3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepThree;
