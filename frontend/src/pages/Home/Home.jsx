import React from 'react'
import { assets } from '../../assets/assets'
import './Home.css'


function Home() {
  return (
    <div className='container'>
        <div className="home__wrapper">
          <div className="home__wrap--left">


            <div className='home__description'>
              <div className="title-top">
                <h1 className='h1'>Tsubomi</h1>
              </div>
              <p className='title-top__description'>Откройте для себя уникальные букеты и подарки на любой случай: подарите радость с помощью нашей онлайн-службы доставки цветов</p>
              <div className="logo">
                <ul>
                  <li><img src={assets.logobig} alt="" /></li>
                  <li><p className='logo__description logo__description-mob'>Испытайте радость дарения в нашей современной цветочной студии. Закажите онлайн и отправьте свежие цветы, растения и подарки сегодня.</p></li>
                </ul>
                 
                 
              </div>
              
            </div>

            <div className="space"></div>

            <div className="title__left ">
              <p className='h1--sub'>О нас</p>
            </div>

            <div className="title__left title__left--bottom">
              <p className='h1--sub'>Почему выбрали нас ?</p>
            </div>

            <div className="space__more"></div>

            <div className="title__left title__left--bottom">
              <img src={assets.homewom} alt="" />
            </div>

          </div>

          {/* разделение столбцов */}

          <div className="home__wrap--right">
            
            <div className="home__items">
              <div className="ddde">
                <div className="contents__grid--title">
                  <h3 className='h3'>Свежие цветы</h3>
                  <a href=""><h5 className='h5'>Купить сейчас →</h5></a>  
                </div>
              </div>
              <div className="ddde"><img src={assets.carditem1} alt="" /></div>
              <div className="ddde"><img src={assets.carditem2} alt="" /></div>
              <div className="ddde">
                <div className="contents__grid--title">
                  <h3 className='h3'>Сушеные цветы</h3>
                  <a href=""><h5 className='h5'>Купить сейчас ←</h5></a>  
                </div>
              </div>

              <div className="ddde">
                <div className="contents__grid--title">
                  <h3 className='h3'>Живые растения</h3>
                  <a href=""><h5 className='h5'>Купить сейчас →</h5></a>  
                </div>
              </div>
              <div className="ddde"><img src={assets.carditem3} alt="" /></div>
              <div className="ddde"><img src={assets.candle} alt="" /></div>
              <div className="ddde">
                <div className="contents__grid--title">
                  <h3 className='h3'>Арома Свечи</h3>
                  <a href=""><h5 className='h5'>Купить сейчас ←</h5></a>  
                </div>
              </div>

              <div className="ddde">
                <div className="contents__grid--title">
                  <h3 className='h3'>Освежители</h3>
                  <a href=""><h5 className='h5'>Купить сейчас →</h5></a>  
                </div>
              </div>
              <div className="ddde"><img src={assets.diffuser} alt="" /></div>
            </div>

            <div className="description__wrapper">
              <div className="description__card">
                <p><h5 className='h5'>Наша история</h5></p>
                <div className=""><h3 className='h3'>Tsubomi</h3></div>
                <div className=""><h5 className='h5'>Tsubomi – это не просто доставка цветов, а шёпот души, облечённый в изящество лепестков. Мы превращаем отборные цветы премиум-класса в шедевры флористики, чтобы передать ваши самые сокровенные чувства. Каждый букет – это история, рассказанная без слов, прикосновение красоты, которое тронет сердце и оставит неизгладимое впечатление. Tsubomi – когда слова бессильны, за вас говорит красота.</h5></div>
                <button className='btn--toLearnMore'>УЗНАТЬ БОЛЬШЕ</button>
                {/* <Link to="/Ourhistory"></Link> */}
              </div>
            </div>
            
            <div className="description__wrapper description__wrapper--mN">
              <div className="description__card">
                <div className=""><h3 className='h3'>Стильные букеты от флористов</h3></div>
                <div className=""><h5 className='h5'>В нашей цветочной студии профессиональные флористы создают самые элегантные и стильные букеты, используя только самые свежие и качественные материалы. Мы следим за последними тенденциями цветочного дизайна и предлагаем уникальные композиции, которые обязательно произведут впечатление. Позвольте нам украсить ваш день нашими потрясающими букетами и службой доставки в тот же день.</h5></div>
              </div>
            </div>

            <div className="description__wrapper description__wrapper--mN">
              <div className="description__card">
                <div className=""><h3 className='h3'>Своевременная доставка</h3></div>
                <div className=""><h5 className='h5'>Никогда не упускайте ни минуты с нашей службой своевременной доставки цветов. Наши курьеры доставят ваш букет лично, без коробок, чтобы он дошел в идеальном состоянии. Доверьте нам надежную доставку вашего продуманного подарка.</h5></div>
              </div>
            </div>

            <div className="description__wrapper description__wrapper--mN">
              <div className="description__card">
                <div className=""><h3 className='h3'>Безопасная оплата</h3></div>
                <div className=""><h5 className='h5'>Вы можете чувствовать себя в безопасности, размещая заказ у нас, поскольку мы используем стандартные меры безопасности для защиты вашей платежной информации. Ваша транзакция будет безопасной и беспроблемной, поэтому вы можете делать покупки с уверенностью.</h5></div>
              </div>
            </div>

            <div className="description__wrapper description__wrapper--mN">
              <div className="description__card">
                <div className=""><h3 className='h3'>Подписка по вашим потребностям</h3></div>
                <div className=""><h5 className='h5'>Благодаря нашей подписке, адаптированной к вашим конкретным потребностям, вы можете наслаждаться удобством регулярной доставки красивых букетов прямо к вашей двери. Наш гибкий сервис идеально подходит для занятых людей или тех, кто хочет, чтобы у них всегда были свежие цветы под рукой. Вы сэкономите время и деньги с помощью этого простого решения ваших цветочных задач.</h5></div>
              </div>
            </div>

            <div className="description__wrapper description__wrapper--mN line-LplusR">
              <div className="description__card">
                <p className='h1--sub'>Наш сервис</p>
              </div>
            </div>

            <div className="description__wrapper description__wrapper--mN a__subscribe">
              <div className="service__card">
                <p><h5 className='h5'>Услуга</h5></p>
                <div className=""><h3 className='h3'>Цветочные подписка</h3></div>
                  <div className="service__card__description"><h5 className='h5'>Ощутите удобство и экономию регулярных доставок цветов с нашей гибкой подпиской — до 30% выгоднее, чем разовые покупки.</h5></div>
                  <button className='btn--toLearnMore'>Подпишись сейчас</button>
                  {/* <Link to="/Subscription"></Link> */}
              </div>
            </div>

          </div>
          
        </div>
    </div>
  )
}

export default Home