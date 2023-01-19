import React from "react";
import Lights from "./Lights.jsx"

const Stoplight = () => {

    return (
        <div className="d-flex flex-column align-items-center">
            <div className ="bg-dark stoplight-post"></div>
            <Lights />
        </div>
    )
}
export default Stoplight;