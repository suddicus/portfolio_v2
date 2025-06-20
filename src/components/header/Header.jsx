import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component insisde our header
import me from '../../assets/me1.jpg'
import HeaderSocial from './HeaderSocial' //import of headersocial component

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hey there 👋🏾, the name's</h5>
            <h1>Senku I.</h1>
            <h5 className='text-light'>A developer at **insert_company**,<br></br>**inset_location**</h5>
            <CTA/>
            <HeaderSocial/>
            <div className='my_image'>
                <img src={me} alt='my image'></img>
            </div>
            <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header