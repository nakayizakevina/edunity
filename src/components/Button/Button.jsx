import './Button.css'

export default function Button(props){
    return(
        <button className='button'  style={{
        width: props.width,
        backgroundColor: props.bgColor
      }}>{props.title}</button>
    )
}