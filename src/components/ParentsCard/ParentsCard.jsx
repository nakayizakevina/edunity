import "./ParentsCard.css";
import Ratestar from "../../assets/Icons/ratestar.svg?react";

export default function ParentsCard(props) {
  return (
    <div className="parents__card">
       <Ratestar/>
       <p className="Parents__message">"{props.message}"</p>
       <div className="parents__info">
        <div className="parents__image">{props.image}</div>
        <p className="parents__name">
          {props.name} <br /> 
          <span className="parents__title">{props.title}</span>
        </p>
       </div>
    </div>
  );
}
