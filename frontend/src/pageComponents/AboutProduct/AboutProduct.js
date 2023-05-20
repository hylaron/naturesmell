import './AboutProduct.css'

import ecoImg from '../../img/ico/eco.png'
import candleImg from '../../img/ico/candle.png'
import HandmadeImg from '../../img/ico/handmade.png'


const AboutProductBlock = (props) => {
    return (
        <div className='about-product__content__block'>
            <img src={props.img} alt='icon' />
            <div>
                <h3 className='about-product__content__block--title'>
                    {props.title}
                </h3>
                <div className='about-product__content__block--text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

const AboutProduct = (props) => {
    return (
        <div className="about-product">
            <div className='container'>
                <h2>{props.title}</h2>
                <div className='about-product__content'>
                    <AboutProductBlock
                        img={ecoImg}
                        title='Экологичность'
                        text='Для наших свечей мы используем натуральный дерматологически тестированный соевый воск и аромамасла с сертификацией IFRA и MSDS'
                    />
                    <AboutProductBlock
                        img={candleImg}
                        title='Минимализм'
                        text='Мы предлагаем простой минималистичный дизайн свечи, который впишется в любой интерьер, а также отдаст максимум света'
                    />
                    <AboutProductBlock
                        img={HandmadeImg}
                        title='Создано вручную'
                        text='Наши продукты созданы вручную с вниманием и любовью. От момента растапливания воска до упаковки мы дарим чистую эйфорию'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutProduct