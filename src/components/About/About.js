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
    let subtitle = document.getElementsByClassName('subtitle')
    let text = document.getElementsByClassName('text')
    const letters = document.querySelectorAll('.letters')
;


    timeline
        .from(overlay,0.3,{x:-200})
        .from(chairImage, 0.6 ,{ x:-400 })
        .to(titleOverlay, 0.4, {x:-300})
        .from(text, 0.5,{opacity: 0, ease: " power1.inOut" })
        .staggerFrom(letters, 0.3,{y:100 ,ease:"back.out(0.7)", opacity:0},0.03)



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
                    <h2 className="subtitle">
                        <div className="letters">A</div>
                        <div className="letters">B</div>
                        <div className="letters">O</div>
                        <div className="letters">U</div>
                        <div className="letters">T</div>
                        <div className="letters"></div>
                        <div className="letters">U</div>
                        <div className="letters">S</div>


                    </h2>
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