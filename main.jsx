
import './style1.css';
import React from "react";
import Side from "./sidebar";
import Total from "./total";

function Main(){
    return(
        <div className="container">
            <Side/>
            <Total/>

        </div>
    );
}
export default Main;
