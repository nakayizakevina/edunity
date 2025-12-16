import "./Logo.css"
import BookLogo from "../../assets/Icons/booklogo.svg?react"

export default function Logo(Props){
    return(
        <div className="logo">
                    <BookLogo/>
                    <h6>{Props.title}</h6>
        </div>
    )
}