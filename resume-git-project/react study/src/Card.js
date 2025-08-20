import './Card.scss'
import {Button} from "./Button";

export const Card = ({isCanada, city, alert}) => {
    // console.log(prop)
    // let city = 'Toronto'
    return <div className='card' style={alert}>
        <h2>This is the city detail card</h2>
        <p>{city}</p>
        <p>Canada? {isCanada && 'yes'}</p>
        <Button/>
    </div>
}