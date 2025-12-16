import "./PopularPost.css";
import Calendar from "../../assets/Icons/calendar.svg?react";
import Message from "../../assets/Icons/message.svg?react";
import Button from "../../components/Button/Button.jsx";

export default function PopularPost(props) {
  return (
    // <section className="poularPost__card">
    //   <div>
    //     <img className="post__image" src="/jimmy.png" alt="" />
    //   </div>
    //   <div className="post__date">
    //     <div className="post__details">
    //       <Calendar />
    //       <p>15th April 2024</p>
    //     </div>
    //     <div className="post__details">
    //       <Message />
    //       <p>Comment(06)</p>
    //     </div>
    //   </div>
    //   <p className="post__content">
    //     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    //     occaecat cupidatat
    //   </p>
    //   <Button title="Read More" />
    // </section>
    <section className="poularPost__card">
      <div className="post__image">{props.image}</div>
        <div className="post__date">
            <div className="post__details"><Calendar/><p>{props.date}</p></div>
             <div className="post__details"><Message/><p>{props.message}</p></div>
        </div>
        <p className="post__content">{props.text}</p>
        <Button title="Read More"/>
    </section>
  );
}
