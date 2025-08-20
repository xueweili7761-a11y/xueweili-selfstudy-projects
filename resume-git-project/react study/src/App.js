import './App.css';
import {Card} from "./Card";
import {Button} from "./Button";
import {useState} from "react";

function App() {
    const alertStyle = {backgroundColor: 'yellow', color: 'red'}
    // let count=0
    const [count, updateCount]=useState(0)
    const clickHandler = (message) => {
        console.log('clicked', message)
        // count++
        updateCount(count+1)
        console.log('count===', count)
    }
    return (
        <>
            <h1>This is a weather page</h1>
            <div className="container">
                <Card city='Toronto' alert={alertStyle} isCanada={true}/>
                <Card city='Beijing'/>
                <Card city='Ottawa'/>
                <Card city='New York'/>
            </div>
            <hr/>
            <div className="container">
                <h3>you have added:{count}</h3>
                <Button label={<p>hello</p>} click={clickHandler}/>
                <Button label={'btn2'} click={clickHandler}/>
                <Button label={'btn3'} click={clickHandler}/>
                <Button label={'btn4'} click={clickHandler}/>
            </div>
        </>
    );
}

export default App;
