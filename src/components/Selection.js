import React from "react";
import { useState } from "react";

const Selection=(props)=>{
    const [getBackground,setBackground]=useState({background:''})
    return(
        <div className="fix-box" onClick={()=>props.applyColor(setBackground)} style={getBackground}>
            <h2 className="subheading">Selection</h2>
        </div>
    )
}
export default Selection;