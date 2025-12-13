import './FeaturedCard.css'

export default function FeaturedCard(props){
    return(
        <section className='card'>
         <div className='card__icon'>{props.icon}</div>
         <h3 className='card__title'>{props.title}</h3>
         <p className='card__message'>{props.message}</p>
        </section>
    )
}