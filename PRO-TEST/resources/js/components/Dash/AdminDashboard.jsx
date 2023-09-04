import React, { useState } from "react";
import "../../../css/AdminDash.css"
import ParticlesBackground from "../particles/Particles";
export default function AdminDashboard({children}){
    const [show,setShow]=useState(children[0])
    const [control,setControl]=useState(true)
    const [iconlg,setIconlg]=useState(false)
    const [iconcontent,setIconcontent]=useState("fa-solid fa-right-long")

    const handleShowControl = () => {
        setControl(!control);
        setIconlg(!iconlg)
    if (iconlg==false) {
        setIconcontent("fa-solid fa-left-long")
    }else{
        setIconcontent("fa-solid fa-right-long")
    }

      };
    const toglecomp=(selcomp)=>{

        setShow(selcomp)
        handleShowControl()
    }
    return(
        <div className="parentDash">
            <ParticlesBackground/>
            <div className="sidebar ">
            <div className={`${control && "closeside"}`}>
            <div className="btnswitsh" onClick={()=>toglecomp(children[0])}>ADD NEW PROJECT</div>
            <div className="btnswitsh" onClick={()=>toglecomp(children[1])}>ADD NEW SKILL</div>
            <div className="btnswitsh" onClick={()=>toglecomp(children[5])}>ADD CERTIFICATE</div>
            <div className="btnswitsh" onClick={()=>toglecomp(children[6])}>ADD WORK EXP</div>

            <div className="btnswitsh" onClick={()=>toglecomp(children[2])}>PROJECTS LIST</div>
            <div className="btnswitsh" onClick={()=>toglecomp(children[3])}>SKILLS LIST</div>
            <div className="btnswitsh" onClick={()=>toglecomp(children[4])}>CERTIFICATES LIST</div>
            <div className="btnswitsh" onClick={()=>toglecomp(children[7])}>WORK EXP LIST</div>
            <a className="btnswitsh" href="/user/profile">ADMIN PROFILE</a>
            <div className="btnclose" onClick={handleShowControl}><i className={iconcontent}></i></div>
</div>
            </div>
            <div className="h-100">
                {show}
            </div>
        </div>
    )
}
