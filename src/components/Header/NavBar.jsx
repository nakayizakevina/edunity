import "./Header.css";
import { useState } from "react";

import Button from "../Button/Button.jsx";
import Options from "../Options/Options.jsx";

import Search from "../../assets/Icons/search.svg?react";
import Profile from "../../assets/Icons/profile.svg?react";
import NavDrop from "../../assets/Icons/navdrop.svg?react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="media">
        <img
          className="logo width={220} height={54}"
          src="/logo.png"
          alt="Edunity Logo"
        />
        <ul className="media">
          <li className="media__li">
            Home
            <NavDrop className="media__icon" onClick={() => setIsOpen(!isOpen)} />
              {isOpen && (
              <Options list="About" list1="Our Work" list2="Branches" list3="Contact Us"/>
            )}
          </li>
          <li className="media__li">About Us</li>
          <li className="media__li">
            Courses
            <NavDrop
              className="media__icon"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <Options list="Creative Arts" list1="Child Psychology" list2="Child Health" list3="Early Literacy"/>
            )}
          </li> 
          <li className="media__li">
            Pages
            <NavDrop className="media__icon" onClick={() => setIsOpen(!isOpen)}/>
              {isOpen && (
              <Options list="Creative Arts" list1="Child Psychology" list2="Child Health" list3="Early Literacy"/>
            )}
          </li>
          <li className="media__li">
            Blog
            <NavDrop className="media__icon" onClick={() => setIsOpen(!isOpen)}/>
            {isOpen && (
              <Options list="Creative Arts" list1="Child Psychology" list2="Child Health" list3="Early Literacy"/>
            )}
          </li>
          <li className="media__li">Contact</li>
        </ul>
      </div>
      <div className="media">
        <Search className="nav__icon media__icon " />
        <Profile className="nav__icon media__icon" />
        <Button title="Contact" />
      </div>
    </nav>
  );
}
