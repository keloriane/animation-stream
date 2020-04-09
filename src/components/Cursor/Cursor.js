import React,{useEffect} from 'react';
import "./Cursor.scss";
import gsap from 'gsap'


const Cursor = () => {

    useEffect(()=> {
        let page = document.getElementById('root')
        console.log(page);
        const cursor = document.getElementById('cursor');
        const mouseMove = (e) => {
            const mousePos = {
                x:e.clientX,
                y:e.clientY,
            }
            gsap.to(cursor, 0.5,{
                x: mousePos.x,
                y: mousePos.y
            })
        }
    
        page.addEventListener('mousemove', mouseMove)

    },[])




return (
    <div>
        <div id="cursor"></div>
        <div id="inner-cursor"></div>

    </div>
)

}

export default Cursor