import "./Home.css";
import "./Welcome.css";
import "./Features.css";
import "./Aboutus.css";
import "./Review.css";
import "./Newapproach.css";

import Header from "../../components/Header/Header.jsx";
import NavBar from "../../components/Header/NavBar.jsx";
import Button from "../../components/Button/Button.jsx";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard.jsx";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard.jsx";
import ReviewCounts from "../../components/ReviewCounts/ReviewCounts.jsx";
import Play from "../../assets/Icons/play.svg?react";
import Course from "../../assets/Icons/course.svg?react";
import Teacher from "../../assets/Icons/teacher.svg?react";
import House from "../../assets/Icons/house.svg?react";
import BookLogo from "../../assets/Icons/booklogo.svg?react";
import Tick from '../../assets/Icons/tick.svg?react';
import RedTick from '../../assets/Icons/redtick.svg?react';
import Award from "../../assets/Icons/award.svg?react";
import Classroom from "../../assets/Icons/classroom.svg?react";
import Handshake from "../../assets/Icons/handshake.svg?react";
import Man from "../../assets/Icons/man.svg?react";

export default function Home() {
  return (
    <section className="Home__page">
      <Header />
      <NavBar />
      <section className="welcome__section">
        <img
          className="birds welcome__section__icons"
          src="/birds.png"
          alt="birds"
        />
        <img
          className="cloud welcome__section__icons"
          src="/cloud.png"
          alt="cloud"
        />
        <img
          className="cancel welcome__section__icons"
          src="/cancel.png"
          alt="cancel"
        />
        <img className="rays welcome__section__icons" src="/rays.png" alt="" />
        <img className="sun welcome__section__icons" src="/sun.png" alt="sun" />
        <img
          className="cancel2 welcome__section__icons"
          src="/cancel2.png"
          alt="cancel"
        />
        <div className="green__design welcome__section__icons"></div>
        <section className="welcome__section__details">
          <div className="welcome__section__leftsection">
            <h1 className="welcome__section__header">
              The Best Place To Learn And Play For Kids
            </h1>
            <p className="welcome__section__message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="welcome__section__cta">
              <Button title="Browse Courses" />
              <div className="cta__nav">
                <div className="cta__play">
                  <Play className="cta__play--icon" />
                </div>
                <a href="">Watch Now</a>
              </div>
            </div>
          </div>
          <div className="welcome__section__rightsection">
            <section className="student">
              <div className="student__background"></div>
              <img className="student_img" src="/student.png" alt="student" />
            </section>
            <div className="success__courses">
              <div className="success__courses--number">5.8K</div>
              <div className="success__courses--message">Success Courses</div>
            </div>
            <div className="students__overview">
              <div className="students__number">
                <div className="students__details student__number">10K+</div>
                <div className="students__details student__title">Students</div>
              </div>
              <img className="students__photo" src="/alumi.png" alt="" />
            </div>
            <section className="graduate">
              <div className="graduate__background"></div>
              <img
                className="welcome__section__images graduate__photo"
                src="/graduate.png"
                alt=""
              />
            </section>
          </div>
        </section>
      </section>
      <section className="features__section">
        <FeaturedCard
          icon={<Course />}
          title="START COURSES "
          message="Duis aute irure dolor reprehenderit in
               voluptate velit esse cillum dolore fugiat
               nulla pariatur. Excepteur"
        />

        <FeaturedCard
          icon={<Teacher />}
          title="EXPERT TEACHERS"
          message="Duis aute irure dolor reprehenderit in
               voluptate velit esse cillum dolore fugiat
               nulla pariatur. Excepteur"
        />
        <FeaturedCard
          icon={<House />}
          title="STRATEGI LOCATION"
          message="Duis aute irure dolor reprehenderit in
               voluptate velit esse cillum dolore fugiat
               nulla pariatur. Excepteur"
        />
      </section>
      <section className="aboutus__section">
        <img
          className="yellowball aboutus__icon"
          src="/yellowball.png"
          alt=""
        />
        <img className="redball aboutus__icon" src="/redball.png" alt="" />
        <img className="greenball aboutus__icon" src="/greenball.png" alt="" />
        <img className="aboutus__cloud aboutus__icon" src="/cloud.png" alt="" />
        <img
          className="aboutus__birds aboutus__icon"
          src="/birds2.png"
          alt=""
        />
        <div className="happy__student aboutus__icon">
          <div className="happy__students--number">
            <div className="happy__students--details  happy__students">
              Happy
            </div>
            <div className="happy happy__students--details">Student</div>
          </div>
          <img className="happy__students__photo" src="/alumi.png" alt="" />
        </div>
        <div className="aboutus__left-section">
          <div className="playboy">
            <div className="playboy__background"></div>
            <img src="/playingboy.png" alt="" />
          </div>
          <div className="acdemicgirl">
            <div className="acdemicgirl__background"></div>
            <img src="/girlwithglasses.png" alt="" />
          </div>
        </div>
        <div className="aboutus__right-section">
          <div className="aboutus__logo">
            <BookLogo />
            <h6>ABOUT US</h6>
          </div>
          <h1>
            It's our passion to work with children at{" "}
            <span className="kindergarden">kindergarten.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud..
          </p>
          <div className="our__focus">
            <AboutUsCard icon={<Tick/>} text="QUALITY EDUCATIORS" />
            <AboutUsCard icon={<Tick/>} text="PLAY TO LEARN" />
            <AboutUsCard icon={<Tick/>} text="SAFETY AND SECURITY" />
            <AboutUsCard icon={<Tick/>} text="HOMELIKE ENVIROMEND" />
          </div>
          <Button title="Admission Open" />
        </div>
      </section>
      <section className="review__section">
        <img
          className="bluestar review__section-icons"
          src="/bluestar.png"
          alt="bluestar"
        />
        <img
          className="whitecloud review__section-icons"
          src="/whitecloud.png"
          alt="whitecloud"
        />
        <img
          className="whitestar review__section-icons"
          src="/whitestar.png"
          alt="whitestar"
        />

        <img className="reviewimg" src="/reviewimg.png" alt="Kids playing" />
        <div className="review__numbers">
          <ReviewCounts icon={<Man />} number="2,500" text="Total Teacher" />
          <ReviewCounts
            icon={<Handshake />}
            number="5,000"
            text="Total Student"
          />
          <ReviewCounts
            icon={<Classroom />}
            number="350"
            text="Total Classroom"
          />
          <ReviewCounts
            icon={<Award />}
            number="1,200"
            text="Best Awards Won"
          />
        </div>
      </section>
      <section className="newapproach__section">
        <img className="rainbow newapproach__icon" src="/rainbow.png" alt="" />
        <img className="wave newapproach__icon" src="/wave.png" alt="" />
        <img className="drop newapproach__icon" src="/drop.png" alt="" />
        <img className="car newapproach__icon" src="/car.png" alt="" />
        <img className="newapproach-birds newapproach__icon" src="/birds.png" alt="" />
        <div className="newapproach__left-section">
          <div className="newapproach__logo">
            <BookLogo />
            <h6>ABOUT US</h6>
          </div>
          <h1>New Approach To Fun</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div className="our__focus">
            <AboutUsCard icon={<RedTick/>} text="Best Teaching" />
            <AboutUsCard icon={<RedTick/>} text="Quality Educators" />
            <AboutUsCard icon={<RedTick/>} text="Expert Tutors" />
            <AboutUsCard icon={<RedTick/>} text="Affordable" />
          </div>
          <Button title="Find Events" />
        </div>
        <div className="newapproach__right-section">
          <img className="smilingbaby" src="/smilingbaby.png" alt="smilingbaby" />

        </div>
      </section>
    </section>
  );
}
