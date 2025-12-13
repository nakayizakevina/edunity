import "./Header.css"

import Clock from '../../assets/Icons/clock.svg?react'
import Location from '../../assets/Icons/location.svg?react'
import DropDown from '../../assets/Icons/dropdown.svg?react'
import FaceBook from '../../assets/Icons/facebook.svg?react'
import Twitter from '../../assets/Icons/twitter.svg?react'
import Skyp from '../../assets/Icons/skyp.svg?react'
import LinkedIn from '../../assets/Icons/linkedin.svg?react'

export default function Header(){
    return(
        <section className="header">
            <div className="header__workinginfo media">
                <div className="workinginfo__details">
                    <Clock/>
                    <p>Working: Monday-Friday.9:00am-5:00pm</p>
                </div>
                <div className="workinginfo__details">
                    <Location/>
                    <p>Hudson,Wisconsin(WI),54016</p>
                </div>
            </div>
            <div className="header__media media">
                <div className="media__origin">
                    <img src="/countryIcon.png" alt="countryIcon" />
                    <p>English</p>
                    <DropDown className="media__icon"/>
                </div>
                <div className="media__platforms media">
                    <FaceBook className="media__icon"/>
                    <Twitter className="media__icon" />
                    <Skyp className="media__icon"/>
                    <LinkedIn className="media__icon"/>
                   
                </div>
               
                
            </div>
        </section>
    )
}