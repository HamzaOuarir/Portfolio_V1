import React, { useEffect, useState } from "react";
import "../../css/loading.css";

export default function (props) {
    const [dta,setDta]=useState([])
    const [onLoad,setOnLoad]=useState("grid")

useEffect(()=>{
    setTimeout(() => {
        setDta(props.dta)
        if(dta!=[]){
        setOnLoad('none')}
    }, 3000);
},[])
    const MyCss = {

    display: onLoad,
    };

    return (
        <div style={MyCss} className="divld">
          <div className="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

        </div>
    );
}
