import './ReviewCounts.css'


export default function ReviewCounts(props){
    return(
        <div className='reviewcard'>
            <div className='reviewcard__avata'>
                <div className="avata">{props.icon}</div>
            </div>
            <h3>{props.number}</h3>
            <p>{props.text}</p>
        </div>
    )

}