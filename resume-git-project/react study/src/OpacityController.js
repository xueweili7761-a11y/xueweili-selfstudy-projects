import './OpacityController.css'
import {useState} from "react";
export const OpacityController=()=>{
    const [opacity,setOpacity]=useState(1)
    const changeHandler=(e)=>{
        setOpacity(e.target.value)


    }
    return<>
        <input type="range"
               min={0}
               max={1}
               step={0.1}
               value={opacity}
        onChange={changeHandler}/>
        <div className="square" style={{opacity}}></div>
    </>
}