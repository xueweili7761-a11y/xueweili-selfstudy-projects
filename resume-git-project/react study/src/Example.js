import './Example.css'
import {PasswordInput} from "./PasswordInput";
import {useState} from "react";
import {hydrateRoot} from "react-dom/client";
import {OpacityController} from "./OpacityController";

export const Example= () =>{
    const[isOff,setIsOff]=useState(false)
    const click=()=>{
        setIsOff(!isOff)
    }
    return<>
    <h1>This is example page </h1>
        <hr/>
<h2>password component</h2>
        <PasswordInput/>
        <hr/>
        <h2>Close Ads</h2>
        {!isOff && <div>this is a for ad,enjoy 100%off</div>}
        <button onClick={click} >close me </button>
        <hr/>
        <OpacityController/>
    </>
}