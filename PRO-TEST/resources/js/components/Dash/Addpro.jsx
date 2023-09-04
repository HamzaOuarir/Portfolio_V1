import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/AdminDash.css";
import Swal from "sweetalert2";
export default function () {
    const [NameP, setNameP] = useState("");
    const [Desc, setDesc] = useState("");
    const [Image, setImage] = useState('');
    const [link, setLink] = useState("");
    const [loadingP, setLoadingP] = useState(false);
    const [loadingT, setLoadingT] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProId();
    },[]);

    const addPro = async (e) => {
        setLoadingP(true);
        e.preventDefault();

        const Fdata = new FormData();
        Fdata.append("filePro", Image);
        Fdata.append("Desc", Desc);
        Fdata.append("link", link);
        Fdata.append("NameP", NameP);

        try {
            await axios.post("/api/projects", Fdata);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">${NameP}  Added successfuly</div>`,
                showConfirmButton: false,
                width: "300px",
                timer: 2000,
            });
            setImage("");
            setLink("");
            setDesc("");
            setNameP("");
            setGoodLink('')
            setGoodDescP('')
            setGoodNameP('')
            setLoadingP(false); fetchProId();
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
            setLoadingP(false);
            setErrors(error.response.data.errors);
        }
    };

    /********************Add project tools********************* */

    const [NameTol, setNameTol] = useState("");
    const [ImageTol, setImageTol] = useState("");

    const [idPro, setIdPro] = useState("");
    const addTolPro = async (e) => {
        setLoadingT(true);
        e.preventDefault();

        const FdataTool = new FormData();
        FdataTool.append("fileTool", ImageTol);
        FdataTool.append("NameTool", NameTol);
        FdataTool.append("idPro", idPro);
        try {
            await axios.post("/api/Tools", FdataTool);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">${NameTol}  Added successfuly</div>`,
                showConfirmButton: false,
                width: "300px",
                height: "150px",

                timer: 2000,
            });

            setLoadingT(false);
            setErrors([]);

            setNameTol("");
            setImageTol("");
            setGoodNameT('')

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
            setLoadingT(false);

            setErrors(error.response.data.errors);
        }
    };

    /******************************************* */
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
    /*************************************************************************/

    const [GoodLink, setGoodLink] = useState(false);
    const [GoodNameP, setGoodNameP] = useState(false);
    const [GoodDescP, setGoodDescP] = useState(false);

    /************************************************************************/
   const [GoodNameT, setGoodNameT] = useState(false);
    const [GoodIdP, setGoodIdP] = useState(false);
   /********************************************************************** */
   const [projId, setProjId] = useState([]);

   const fetchProId = async () => {
    try {
        const response = await axios.get("/api/projects");
        setProjId(response.data.pro);
    } catch (error) {
        console.log(error);
    }
};

    return (
        <div className="h-100 d-flex align-items-center justify-content-center flex-wrap gap-2">
            <div
                className=" d-flex align-items-center  justify-content-center my-3"
                style={{ margin: "0 20px" }}
            >
                <div
                    className="card  carddz"
                    style={{ boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a" }}
                >
                    <div className="card-header ">
                        <h4 className="text-center mt-2 text-uppercase">
                            ADD NEW PROJECT
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => addPro(e)} className="mt-3">




                        <div style={{ position: "relative" }}>
                            <input
                                type="text"
                                value={NameP}
                                onChange={(e) => setNameP(e.target.value)}
                                placeholder="Project Name"
                                className="form-control mt-3"
                                name=""
                                id=""
                                onBlur={(e) =>
                                    e.target.value
                                        ? setGoodNameP(true)
                                        : setGoodNameP(false)
                                }
                            />  {
                                <span
                                    style={
                                        GoodNameP
                                            ? {
                                                  color: "green",
                                                  position: "absolute",
                                                  right: "5px",
                                                  top: "8px",
                                              }
                                            : { display: "none" }
                                    }
                                >
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            }
                        </div>
                            {showError("NameP")}





                            <div style={{ position: "relative" }}>
                            <textarea
                                type="text"
                                value={Desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder="Project Description"
                                className="form-control mt-3"
                                onBlur={(e) =>
                                    e.target.value
                                        ? setGoodDescP(true)
                                        : setGoodDescP(false)
                                }
                            ></textarea>  {
                                <span
                                    style={
                                        GoodDescP
                                            ? {
                                                  color: "green",
                                                  position: "absolute",
                                                  right: "5px",
                                                  top: "8px",
                                              }
                                            : { display: "none" }
                                    }
                                >
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            }
                        </div>







                            {showError("Desc")}
                            <div style={{ position: "relative" }}>
                            <input
                                type="text"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                placeholder="Project Link"
                                className="form-control mt-3"
                                onBlur={(e) =>
                                    e.target.value.includes('https://')
                                        ? setGoodLink(true)
                                        : setGoodLink(false)
                                }
                            />  {
                                <span
                                    style={
                                        GoodLink
                                            ? {
                                                  color: "green",
                                                  position: "absolute",
                                                  right: "5px",
                                                  top: "8px",
                                              }
                                            : { display: "none" }
                                    }
                                >
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            }
                        </div>





                            {showError("link")}
                            <label
                                htmlFor="fileinp"
                                className="form-control mt-3"
                                style={{ color: "#6c757d",position:"relative"  }}
                            >
                                {Image ? Image.name : "Project Image"}
                                <span  style={Image?{color:"green",position:"absolute",right: "5px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>

                            </label>
                            {showError("filePro")}
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                id="fileinp"
                                style={{ display: "none" }}
                            />
                            {loadingP ? (
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

            <div
                className="d-flex align-items-center  justify-content-center  my-3"
                style={{ margin: "0 20px" }}
            >
                <div
                    className="card  carddz"
                    style={{ boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a" }}
                >
                    <div className="card-header ">
                        <h4 className="text-center mt-2 text-uppercase">
                            ADD YOUR PROJECT TOOLS
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => addTolPro(e)} className="mt-3">




                        <div style={{ position: "relative" }}>
                           <select value={idPro} className="form-control mt-3"  onChange={(e) =>{setIdPro(e.target.value), e.target.value? setGoodIdP(true) : setGoodIdP(false)}}>
                            <option  disabled value="" >Select Project</option>
                            { projId?.map(pro => (
                                <option key={pro.id} value={pro.id}>{pro.Name}</option>
                            ))}

                           </select>
                             {
                                <span
                                    style={
                                        GoodIdP
                                            ? {
                                                  color: "green",
                                                  position: "absolute",
                                                  right: "5px",
                                                  top: "8px",background:"#ffffff"
                                              }
                                            : { display: "none" }
                                    }
                                >
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            }
                        </div>




                            {showError("idPro")}
                            <div style={{ position: "relative" }}>
                            <input
                                type="text"
                                value={NameTol}
                                onChange={(e) => setNameTol(e.target.value)}
                                placeholder="Tool Name"
                                className="form-control mt-3"
                                name=""
                                id=""
                                onBlur={(e) =>
                                    e.target.value
                                        ? setGoodNameT(true)
                                        : setGoodNameT(false)
                                }
                            />  {
                                <span
                                    style={
                                        GoodNameT
                                            ? {
                                                  color: "green",
                                                  position: "absolute",
                                                  right: "5px",
                                                  top: "8px",
                                              }
                                            : { display: "none" }
                                    }
                                >
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            }
                        </div>

                            {showError("NameTool")}


                            <label
                                htmlFor="filetool"
                                className="form-control mt-3"
                                style={{ color: "#6c757d",position:"relative" }}
                            >
                                 {ImageTol ? ImageTol.name : "Tool Image"}
                                <span  style={ImageTol?{color:"green",position:"absolute",right: "5px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>

                            </label>
                            {showError("fileTool")}
                            <input
                                type="file"
                                onChange={(e) => setImageTol(e.target.files[0])}
                                id="filetool"
                                style={{ display: "none" }}
                            />
                            {loadingT ? (
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
