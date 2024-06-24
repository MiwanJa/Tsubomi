import React from 'react'
import './Header.css'
// import assets from '../../assets/assets.js'
import { assets } from '../../assets/assets'
  
    
function Header() {


  return (
    <div className='header__wrap'>
      <div className="header__container">
        <ul className="container--left">
            <li>
                <div>
                    <button id="left-nav">
                        Каталог 
                    </button>   
                    <button class="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                        <span></span>
                        </label>
                        
                        <ul class="menu__box">
                            <li><a class="menu__item" href="#">Вход</a></li>
                            {/* <li><a class="menu__item" href="#">Выйти</a></li> */}
                            <li><a class="menu__item" href="#">Каталог</a></li>
                            <li><a class="menu__item" href="#">О нас</a></li>
                            <li><a class="menu__item" href="#">Наши контакты</a></li>
                            <li><a class="menu__item" href="#">Наши сети</a></li>
                        </ul>
                    </button>           
                </div>
            </li>
            <li>
                <div className='left__nav__btn'>
                    <button >
                        Контакты
                    </button>
                </div>
            </li>
        </ul>
        <ul className="container--right">
            <li>
                <div className='right__nav__btn'>
                    <button >
                        Войти
                    </button>
            </div>
            </li>
            <li>
                <div>
                    <button  id="right-nav">
                        Корзина
                    </button>
                    <button id="basket__btn--img">
                        <img src={assets.shopping_bag} alt="basket" id="basket-img" />
                    </button>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header