import React, {useState} from "react";
import '../App.css';

const Lights = () => {
    const [activeColor, setActiveColor] = useState(null);

    function toggleClass(color){
        if(activeColor !== color) setActiveColor(color)
        else setActiveColor(null);
    }
    const colors = ['red', 'yellow', 'green']
    const TrafficLight = ({color}) => {
        return (
        <div onClick={() => toggleClass(color)} 
        className={`rounded-circle ${color}-light ${activeColor === color ? 'selected' : ''}`}>
        </div>
        )
    }
    return(
    <div className ="bg-dark stoplight-container py-2 px-2 w-100 d-flex flex-column align-items-center rounded">
        {colors.map((color) => <TrafficLight color={color} key={color}/>)}
    </div>
    )
}
export default Lights;