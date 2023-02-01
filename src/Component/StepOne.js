import "./step1.css";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context/store";
import { addStore } from "../context/store/action";
import { useState } from "react";
import deal from "../Asset/Asset 58.png";
import { ProgressBar } from "react-bootstrap";
import { sendStoreNameService } from "../service/store.service";

function StepOne() {
  const navigate = useNavigate();
  const { dispatch } = useStoreContext();
  const [store_id, setstore_id] = useState("");

  const handleSubmit = async () => {
    const data = {
      store_id: parseInt(store_id),
    };
    await sendStoreNameService(data).then((res) => {
      localStorage.setItem("storename", res?.data?.store_name);
    });
    localStorage.setItem("store_id", store_id);
    dispatch(addStore(store_id));
    navigate("/2");
  };

  return (
    <>
      <div className="w-100 Main2">
        <div className="container text-center">
          {/* removed width from image  and added class to animate it */}
          <img className="my-2 logo-img" alt="Logo" src={deal} height={150} />
          <div className="content  d-flex">
            {/* added the navigation to the start page */}
            <FaAngleLeft
              className="pr-2"
              size={30}
              onClick={() => navigate("/")}
            />
            <h4>Claim your reward in three simple steps.</h4>
          </div>
          <div className="container mt-3">
            <div className="text-left"> 1. Enter the store ID </div>
            <input
              className="form-control mt-4 "
              type="number"
              required
              placeholder="Store ID"
              value={store_id}
              onChange={(e) => setstore_id(e.target.value)}
            />
            {/* disabled the button so that it works when store id has some value */}
            <button
              onClick={() => handleSubmit()}
              disabled={store_id === ""}
              type="button"
              className="btn btn-warning mt-4 w-100"
            >
              Continue
            </button>
            <hr
              className="mt-5"
              style={{ borderTop: " 1px solid rgb(248 158 158 / 58%)" }}
            />
            {/* <button type="button" class="btn btn-outline-warning mt-4 w-100">
              Not in Store
            </button> */}
            <ProgressBar className="mt-3" variant="warning" now={0} />
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

export default StepOne;
