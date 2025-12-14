import './AboutUsCard.css'



export default function AboutUsCard (props){
    return(
        <div className='aboutus__card'>
            <div className='tick'>{props.icon}</div>
            <p>{props.text}</p>
        </div>
    )
}