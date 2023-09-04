import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../css/ListPro.css"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";
export default function () {




    const [Deplo, setDeplo] = useState();
    useEffect(() => {
        fetchDeplo();
    }, []);
    const fetchDeplo = async () => {
        try {
            const response = await axios.get("/api/Depelo");

            setDeplo(response.data);
        } catch (error) {
            console.log(error);
        }
    };
/******************************************************/



const delDep = (depId, depName) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete " + depName + " !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await axios.delete(
                    `/api/Depelo/${depId}`
                );
                Swal.fire("Deleted!", response.data.msg, "success");

    fetchDeplo();
            } catch (error) {
                console.log(error);
            }
        }
    });
};






return(
    <div className="listparent">

        <Loading dta={Deplo}/>
        <div className="listtitl">CERTIFICATES LIST</div>
        <div className="parenttable">
            <div className="tablehead">
                <div>ID</div>
                <div>NAME</div>
                <div>ACTION</div>
            </div>



            {
            Deplo?.map((dep)=>(
                <div key={dep.id} className="tablebody">
                <div>{dep.id}</div>
                <div>{dep.Name.slice(0,22)}<span style={{fontSize:"20px"}}>...</span></div>
                <div>
                <button
                                className="btn btn-danger"
                                onClick={() => delDep(dep.id, dep.Name)}
                            >
                                Delete
                            </button>
                    </div>
            </div>
            ))
         }


        </div>
    </div>
)
}
