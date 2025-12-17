import "./PopularPost.css";
import Calendar from "../../assets/Icons/calendar.svg?react";
import Message from "../../assets/Icons/message.svg?react";
import Button from "../../components/Button/Button.jsx";

export default function PopularPost(props) {
  return (
     <section className="poularPost__card">
      <div className="post__image">{props.image}</div>
        <div className="post__date">
            <div className="post__details"><Calendar/><p>{props.date}</p></div>
             <div className="post__details"><Message/><p>{props.message}</p></div>
        </div>
        <p className="post__content">{props.text}</p>
        <Button title="Read More" width="140px" bgColor="var(--green)"/>
    </section>
  );
}
