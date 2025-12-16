import "./InstructorCard.css"
import Share from "../../assets/Icons/share.svg?react"
export default function InstructorCard(props){
    return(
        <div className="instructor__card">
           <Share className="share__icon"/>
          <div className="instructor__image">{props.image}</div>
        <div className="instructor__info">
                <h3>{props.name}</h3>
                <p>{props.role}</p>
           </div>
        </div>
    )
   
}