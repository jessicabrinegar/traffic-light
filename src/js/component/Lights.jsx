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
    const colors = ['red', 'yellow', 'green']
    function TrafficLight({color}){
        return (
        <div onClick={() => ToggleClass(color)} 
        className={`rounded-circle ${color}-light ${activeColor == color ? 'selected' : ''}`}>
        </div>
        )
    }
    return(
    <div className ="bg-dark stoplight-container py-2 px-2 w-100 d-flex flex-column align-items-center rounded">
        {colors.map((color) => <TrafficLight color={color}/>)}
    </div>
    )
}
export default Lights;