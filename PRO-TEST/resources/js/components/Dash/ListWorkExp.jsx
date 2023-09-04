import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../css/ListPro.css"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";
export default function () {




    const [WorkList, setWorkList] = useState([]);

    useEffect(() => {
        fetchWorkExp();
    }, []);

    const fetchWorkExp = async () => {
        try {
            const response=await axios.get('/api/WorkEXP')
            setWorkList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

/******************************************************/



const delwork = (workId, workName) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete " + workName + "!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await axios.delete(
                    `/api/WorkEXP/${workId}`
                );
                Swal.fire("Deleted!", response.data.msg, "success");

    fetchWorkExp();
            } catch (error) {
                console.log(error);
            }
        }
    });
};






return(
    <div className="listparent">
        <Loading dta={WorkList}/>
        <div className="listtitl">WORK EXPERIENCES LIST</div>
        <div className="parenttable">
            <div className="tablehead">
                <div>ID</div>
                <div>NAME</div>
                <div>ACTION</div>
            </div>



            {
            WorkList?.map((work)=>(
                <div key={work.id} className="tablebody">
                <div>{work.id}</div>
                <div>{work.CmpName}</div>
                <div>
                <button
                                className="btn btn-danger"
                                onClick={() => delwork(work.id, work.CmpName)}
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
