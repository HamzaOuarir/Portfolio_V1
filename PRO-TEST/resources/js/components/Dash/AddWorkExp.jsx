import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function () {
    const [CmpName, setCmpName] = useState("");

    const [PostName, setPostName] = useState("");

    const [Period, setPeriod] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const addWork = async (e) => {
        setLoading(true);
        e.preventDefault();
        const Fdata = new FormData();
        Fdata.append("PostName", PostName);
        Fdata.append("CmpName", CmpName);
        Fdata.append("Period", Period);
        try {
            await axios.post("/api/WorkEXP", Fdata);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">${CmpName}  Added successfuly</div>`,
                showConfirmButton: false,
                width: "300px",

                timer: 2000,
            });
            setErrors([]);
            setLoading(false);
            setPeriod("");
            setPostName("")
            setCmpName("");
            setGoodCmpName(false)
            setGoodPeriod(false)
            setGoodPostN(false)
            //navigate('/')
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `<div style=" font-size:17px">Ooops...! Try Again</div>`,
                showConfirmButton: false,
                width: "300px",

                timer: 2000,
            });

            setLoading(false);
            setErrors(error.response.data.errors);
        }
    };
    /***********************************SetImg**************************************/


    /**********************************Errors*********************************/
    const [errors, setErrors] = useState([]);
    const showError = (field) =>
        errors?.[field]?.map((er, index) => (
            <div style={{ color: "red", fontSize: "13px",marginTop:"5px" }} key={index}>
                <i className="fa-solid fa-circle-exclamation"></i>
                <span className="mx-2">{er}</span>
            </div>
        ));
    /*************************************************************************/
    const [GoodCmpName,setGoodCmpName]=useState(false)
    const handleCmpName=(e)=>{
        e.target.value?setGoodCmpName(true):setGoodCmpName(false)

    }
    const [GoodPeriod,setGoodPeriod]=useState(false)
    const handlePeriod=(e)=>{
        e.target.value?setGoodPeriod(true):setGoodPeriod(false)

    }
    const [GoodPostN,setGoodPostN]=useState(false)
    const handlePostN=(e)=>{
        e.target.value?setGoodPostN(true):setGoodPostN(false)

    }





    return (
        <div className="h-100">
            <div className="h-100 d-flex align-items-center  justify-content-center">
                <div
                    className="card"
                    style={{ boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a" }}
                >
                    <div className="card-header bg-whi">
                        <h4 className="text-center mt-2 text-uppercase">
                            Add new Work Experience
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => addWork(e)} className="mt-3">



                           <div style={{position:"relative"}}> <input
                                type="text"
                                value={CmpName}
                                onChange={(e) => setCmpName(e.target.value)}
                                placeholder="Company Name"
                                className="form-control mt-3"
                                name=""onBlur={(e)=>handleCmpName(e)}
                                id=""
                            />
                            {<span  style={GoodCmpName?{color:"green",position:"absolute",right: "5px",top:"8px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>}

                            </div>
                            {showError("CmpName")}



                           <div style={{position:"relative"}}> <input
                                type="text"
                                value={PostName}
                                onChange={(e) => setPostName(e.target.value)}
                                placeholder="Work Post"
                                className="form-control mt-3"
                                name=""onBlur={(e)=>handlePostN(e)}
                                id=""
                            />
                            {<span  style={GoodPostN?{color:"green",position:"absolute",right: "5px",top:"8px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>}

                            </div>
                            {showError("PostName")}



                           <div style={{position:"relative"}}> <input
                                type="text"
                                value={Period}
                                onChange={(e) => setPeriod(e.target.value)}
                                placeholder="Period"
                                className="form-control mt-3"
                                name=""onBlur={(e)=>handlePeriod(e)}
                                id=""
                            />
                            {<span  style={GoodPeriod?{color:"green",position:"absolute",right: "5px",top:"8px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>}

                            </div>
                            {showError("Period")}














                            {loading ? (
                                <div className="d-flex justify-content-center">
                                <div
                                    className="spinner-border mt-3"
                                    role="status"
                                >
                                    <span className="visually-hidden"></span>
                                </div>
</div>
                            ) : (
                                <button className="btn btn-primary form-control mt-2">
                                    Add
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
