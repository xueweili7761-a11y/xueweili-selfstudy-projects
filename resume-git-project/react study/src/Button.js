import './Button.scss'

export const Button = ({label, click}) => {
    return <button className='myBtn' onClick={()=>click && click(label)}>
        {label}
    </button>
}