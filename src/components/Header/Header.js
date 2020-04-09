import React,{useEffect} from 'react';
import "./Header.scss";
import Logo from './../../img/logo.svg';
import gsap from "gsap"








const Header = () => {
    
    useEffect(()=> {
        const logo = document.getElementById('logo')
        gsap.from(logo,2,{y:100 , opacity:0})
        

    },[])

    return (
        <header className="header-container">
            <div className="left-wrapper bordered">
            <div className="blury-effect">

            </div>

            </div>
            <div className="logo-container">
                <img src={Logo} alt="" id="logo"/>
            </div>
            <div className="right-wrapper bordered">
            <div className="blury-effect">

            </div>

            </div>
            
        </header>
    )
}

export default Header;
