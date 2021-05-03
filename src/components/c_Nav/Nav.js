import React from 'react'
import './Nav.scss'
import logo from './images/logo.png'
import avatar from './images/avatar.jpeg'

function Nav() {
    // {useState, useEffect}
    // const [show, handleShow] = useState(false);
    
    //     useEffect(()=>{
    //             window.addEventListener('scroll', () => {
    //                if (window.scrollY > 100) {handleShow(true)}
    //                else handleShow(false)
    //                console.log(show)
    //                 });
    //         return
    //     }, [])
    // ${show && 'nav_effect'}


    return (
        <div className={`nav_container `}>
            <img className='logo' src={logo} alt="Netflix Logo"/>
            <img className='avatar' src={avatar} alt=""/>
        </div>
    )
}

export default Nav
