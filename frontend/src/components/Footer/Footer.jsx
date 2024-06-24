import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer--item"> 
            <div className="footer__item--padding item--center">
            <div className='h5'>
                Наша важная рассылка на ключевые даты праздников.
            </div>
            <input type="email" placeholder='Ваша почта'/>
            <br />
            <button type='button'>
                НАПОМИНАТЬ
            </button>  
            </div>
             
        </div>
        <div className="footer--item">
            <div className="footer__item--padding item--center">
                <h2>Наши контакты</h2>
            <ul className='ourContactsList'>
                <li>Адресс</li>
                <li>ул. 1905 года, Москва, дом 4</li>
                <br />
                <li>Телефон</li>
                <li><a href="tel:">+8(991)454-45-45</a></li>
                <br />
                <li>Электронная почта</li>
                <li><a href="mailto:">tsubomi@gmail.com</a></li>
                <br />
            </ul> </div>
            <div className="item--center">
                 <h2>Наши сети</h2>
            <ul className='left-center__socialmedia'>
                <li><a href=""><img src={assets.Instagram} alt="icon Instagram" /></a></li>
                <li><a href=""><img src={assets.Pinterest} alt="icon Pinterest" /></a></li>
                <li><a href=""><img src={assets.Facebook} alt="icon Facebook" /></a></li>
                <li><a href=""><img src={assets.Twitter} alt="icon Twitter" /></a></li>
                <li><a href=""><img src={assets.Telegram} alt="icon Telegram" /></a></li>
            </ul>
            </div>
           
           
        
        </div>
        <div className="footer--item">
            <div className="item--center">
                <h2>Каталог</h2>
                <ul className='directoryList'>
                    {/* <Link to="/"></Link> */}
                    <li>Все продукты</li>
                    {/* <Link to="/Freshflowers"></Link> */}
                    <li>Свежие цветы</li>
                    <li>Сушеные цветы</li>
                    <li>Живые растения</li>
                    <li>Дизайнерские вазы</li>
                    <li>Арома Свечи</li>
                    <li>Освежитель Диффузор</li>
                </ul>
            </div>
      
        </div>
        <div className="footer--item">
            
                <div className="item--center">
                    <h2>О нас</h2>
                    <ul className='aboutUsList'>
                        <li>Наша история</li>
                        {/* <Link to="/Ourhistory"></Link> */}
                        <li>Блог</li>
                        <br />
                        <li>Доставка и возврат</li>
                        <li>Условия использования</li>
                        <li>Политика конфиденциальности</li>
                    </ul>
                </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
