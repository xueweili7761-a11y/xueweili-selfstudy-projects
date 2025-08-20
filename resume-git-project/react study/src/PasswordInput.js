import {useState} from "react";

export const PasswordInput=()=>{
    const [isText, updateIsText]=useState(false)
    const clickHandler=() =>{

        updateIsText(!isText)
    }
    return <>
        <label htmlFor="">please type your password</label>
        <input type={isText?'text':'password'}/>
        <button onClick={clickHandler}>
            <ion-icon name={isText ? 'eye-outline' : 'eye-off-outline'}></ion-icon>
        </button>
    </>
}