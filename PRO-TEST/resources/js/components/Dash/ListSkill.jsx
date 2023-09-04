import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../css/ListPro.css"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";
export default function () {




    const [skillsList, setSkillsList] = useState([]);

    useEffect(() => {
        fetchSkill();
    }, []);

    const fetchSkill = async () => {
        try {
            const response=await axios.get('/api/skills')
            setSkillsList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

/******************************************************/



const delSkill = (skillId, skillName) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete " + skillName + "!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await axios.delete(
                    `/api/skills/${skillId}`
                );
                Swal.fire("Deleted!", response.data.msg, "success");

    fetchSkill();
            } catch (error) {
                console.log(error);
            }
        }
    });
};






return(
    <div className="listparent">
        <Loading dta={skillsList}/>
        <div className="listtitl">SKILLS LIST</div>
        <div className="parenttable">
            <div className="tablehead">
                <div>ID</div>
                <div>NAME</div>
                <div>ACTION</div>
            </div>



            {
            skillsList?.map((skill)=>(
                <div key={skill.id} className="tablebody">
                <div>{skill.id}</div>
                <div>{skill.Name}</div>
                <div>
                <button
                                className="btn btn-danger"
                                onClick={() => delSkill(skill.id, skill.Name)}
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
