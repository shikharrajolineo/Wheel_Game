
import Fip from "../Asset/15.png";
import Hun from "../Asset/100.png";
import tHun from "../Asset/200.png";
import CashB from "../Asset/cashback50.png";
import { Link } from "react-router-dom";
function Six(){
    return(
        <>
    <div className="w-100 Main2">
        <div className="container text-center">
        <img
                src={Fip}
                height={100}
                width={100}
              />

<br />
<img
                src={tHun}
                height={100}
                width={100}
          
              />
<br />
              <img
                src={Hun}
                height={100}
                width={100}
             
              />
<br />
              <img
                src={CashB}
                height={100}
                width={100}
              
              />
<br />
             <Link to={""} > <button className="btn btn-warning">Let's Play</button></Link>
        </div>

</div>
        </>
    )
}
export default Six;
