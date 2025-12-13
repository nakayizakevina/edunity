import './AboutUsCard.css'

import Tick from '../../assets/Icons/tick.svg?react'

export default function AboutUsCard (props){
    return(
        <div className='aboutus__card'>
            <Tick className="tick"/>
            <p>{props.text}</p>
        </div>
    )
}