import React, {useState} from "react";

const Lights = () => {
    const [activeColor, setActiveColor] = useState(null);

    function ToggleClass(color){
        if(activeColor != color){
            setActiveColor(color)
        }
        else{
            setActiveColor(null);
        }
    }
    const colors = [{id:1, color:'red'}, {id:2, color:'yellow'}, {id:3, color:'green'}]
    return(
    <div className ="bg-dark stoplight-container py-2 px-2 w-100 d-flex flex-column align-items-center">
        <div onClick={() => ToggleClass('red')} className={"rounded-circle red-light " + (activeColor == 'red' ? 'selected': '')}></div>
        <div onClick={() => ToggleClass('yellow')} className={"rounded-circle yellow-light my-2 " + (activeColor == 'yellow' ? 'selected': '')}></div>
        <div onClick={() => ToggleClass('green')} className={"rounded-circle green-light " + (activeColor == 'green' ? 'selected': '')}></div>
    </div>
    )
}
export default Lights;