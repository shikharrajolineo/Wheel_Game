import "./step1.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context/store";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useCallback } from "react";


function StepTwo() {
  const getMaxDate = useCallback(() => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();
    
    if (dd < 10) {
       dd = '0' + dd;
    }
    
    if (mm < 10) {
       mm = '0' + mm;
    } 
        
    today = yyyy + '-' + mm + '-' + dd;
    return today
  }, [])
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    dob: ""
  });

  const [number, setnumber] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const navigate = useNavigate();
  const { store, handleOtpService, handleVerifyOtpService } = useStoreContext();
  const handleSubmit = () => {
    if (
      !localStorage.getItem("store_id") ||
      !userInfo.email ||
      !userInfo.name ||
      !userInfo.phone ||
      !userInfo.dob
    ) {
      toast.error("Please add all fields");
    } else {
      const payload = {
        store_id: localStorage.getItem("store_id"),
        customer_email: userInfo.email,
        customer_name: userInfo.name,
        customer_number: userInfo.phone,
      };

      handleOtpService(payload);
      localStorage.setItem("user_name", userInfo.name);
      localStorage.setItem("user_email", userInfo.email);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const payload = {
        otp: parseInt(number.one + number.two + number.three + number.four),
        customer_email: userInfo.email,
      };
      await handleVerifyOtpService(payload);
      navigate("/3");
    } catch (error) {
      setnumber({ ...number, one: "", two: "", three: "", four: "" });
      console.log(error);
    }
  };

  const storeName = localStorage.getItem("storename");
  return (
    <>
      <div className="w-100 Main2">
        <div className="container">
          <div className="content pt-4 d-flex justify-content-center">
            <h5>Claim Your Reward</h5>
          </div>
          <div className=" text-center">
            {" "}
            <h5>
              {storeName}
              <br /> Welcomes You
            </h5>
          </div>
          <div className="container mt-3">
            <p> 2. Starts with filling your information here: </p>
            <div class="input-group mt-2">
              <input
                class="form-control mt-2"
                type="text"
                placeholder="Store ID"
                value={localStorage.getItem("storename") || store.store}
                disabled
              />
            </div>
            <div class="input-group mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name"
                aria-label=""
                aria-describedby="basic-addon1"
                value={userInfo.name}
                onChange={(e) => {
                  setuserInfo({ ...userInfo, name: e.target.value });
                }}
              />
            </div>
            <div class="input-group mt-2">
              <input
                type="email"
                class="form-control mt-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={userInfo.email}
                onChange={(e) =>
                  setuserInfo({ ...userInfo, email: e.target.value })
                }
              />
              <br />
            </div>
            <div class="input-group mt-2">
              <input
                type="number"
  
                class="form-control mt-2"
                // aria-describedby="emailHelp"
                placeholder="Contact Number"
                value={userInfo.phone}
                onChange={(e) =>
                  {
                    setuserInfo({ ...userInfo, phone: e.target.value });
                  }
                  
                }
              />
              <br />
            </div>
            <div class="input-group mt-2">
              <input
            
                type="date"
                class="form-control mt-2"
                id="birthday"
                name="birthday"
                placeholder="Date of Birth"
                max={getMaxDate()}
                value={userInfo?.dob}
                onChange={(e) =>
                  setuserInfo({ ...userInfo, dob: e.target.value })
                }
              />
            </div>
            <br />
            <div class="input-group-prepend">
              <button
                class="btn btn-warning"
                type="button"
                onClick={() => handleSubmit()}
                disabled={
                  userInfo.name === "" ||
                  userInfo.email === "" ||
                  userInfo.phone === ""
                }
              >
                Send OTP
              </button>
            </div>


            <div className="text-center mt-2">
              <span>Enter OTP to proceed</span>
              <div className="d-flex">
                <input
                  value={number.one}
                  name="one"
                  id="one-otp"
         
                  onChange={(e) => {
                    setnumber({ ...number, one: e.target.value });
                    document.getElementById("two-otp").focus();
                  }}
                  maxLength="1"
                  type="tel"
                  className="form-control m-1"
                />
                <input
                  value={number.two}
                  name="two"
                  id="two-otp"
              
                  onChange={(e) => {
                    setnumber({ ...number, two: e.target.value });
                    document.getElementById("three-otp").focus();
                    
                  }}
                   
                  maxLength="1"
                  type="tel"
                  className="form-control m-1"
                />
                <input
                  value={number.three}
                  name="three"
                  id="three-otp"
          
                  onChange={(e) => {    
                    setnumber({ ...number, three: e.target.value });
                    document.getElementById("four-otp").focus();
                    
                  }}
                  maxLength="1"
                  type="tel"
                  className="form-control m-1"
                />
                <input
                  value={number.four}
                  name="four"
                  id="four-otp"
                  
                  onChange={(e) => {
                    setnumber({ ...number, four: e.target.value });
                    document.getElementById("submit-otp-btn").focus();
                    document.getElementById("four-otp").blur();
                   
                  }}
                  maxLength="1"
                  type="tel"
                  className="form-control m-1"
                />
              </div>
            </div>

            <button
              onClick={() => handleVerifyOtp()}
              type="button"
              class="btn btn-warning mt-4 w-100"
              id="submit-otp-btn"
              disabled={
                number.one === "" ||
                number.two === "" ||
                number.three === "" ||
                number.four === ""
              }
            >
              Continue
            </button>
            <hr
              className="mt-5"
              style={{ "border-top": " 1px solid rgb(248 158 158 / 58%)" }}
            />
            <ProgressBar className="mt-3" variant="warning" now={33} />
            <div className="row text-center d-flex justify-content-between">
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

export default StepTwo;
