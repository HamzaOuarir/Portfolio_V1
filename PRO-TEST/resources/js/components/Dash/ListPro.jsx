import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../css/ListPro.css";
import Swal from "sweetalert2";
import Loading from "../Loading";
export default function () {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetchProject();
    },[]);

    const fetchProject = async () => {
        try {
            const response = await axios.get("/api/projects");
            setProject(response.data.pro);
        } catch (error) {
            console.log(error);
        }
    };

    /***********************************************/

    const delPro = (proId, proName) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete " + proName + "!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(
                        `/api/projects/${proId}`
                    );
                    Swal.fire("Deleted!", response.data.msg, "success");

        fetchProject();
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    return (
        <div className="listparent">
            <Loading dta={project}/>

            <div className="listtitl">PROJECTS LIST</div>
            <div className="parenttable">
                <div className="tablehead">
                    <div>ID</div>
                    <div>NAME</div>
                    <div>ACTION</div>
                </div>

                { project?.map((proj) => (
                    <div key={proj.id} className="tablebody">
                        <div>{proj.id}</div>
                        <div>{proj.Name}</div>
                        <div>
                            <button
                                className="btn btn-danger"
                                onClick={() => delPro(proj.id, proj.Name)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
