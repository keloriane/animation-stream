import React,{useEffect} from "react";
import chair from './../../img/chair.png';
import gsap from 'gsap';
import "./About.scss";

const About = () => {

useEffect(()=> {
    const timeline = gsap.timeline();

    let overlay = document.getElementsByClassName('overlay')
    let chairImage = document.getElementsByClassName('chair-image')
    let titleOverlay = document.getElementsByClassName('title-overlay')



})

    return(
        <section id="about">
            <div className="image-container">
                <div className="overlay">

                </div>
                <img src= {chair}alt="" className="chair-image"/>
            </div>
            <div className="text-container">
                <div className="title">
                    <div className="title-overlay">

                    </div>
                    <h2>About us</h2>
                </div>
                <div className="text">
                    <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                    </p>
                </div>
                <button>
                    Learn more
                </button>
            </div>
        </section>   
    )
}
export default About;