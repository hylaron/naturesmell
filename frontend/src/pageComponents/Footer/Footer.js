import './footer.css'
import Logo from '../../components/logo/Logo'
const FooterAbout = (props) => {
    return (
        <div className='footer-about__block'>
            <div className='footer-about__title'>
                <h3>{props.title}</h3>
            </div>
            <div className='footer-about__text'>
                {props.text.map((item, index) => {
                    return <span key={index}>{item}</span>
                })}
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-logo'>
                <Logo />
            </div>
            <div className='footer-body'>
                <div className='footer-body__map'>
                    <iframe
                        title="map"
                        src="https://yandex.by/map-widget/v1/-/CCUvQ2GuLA"
                        width="100%"
                        height="100%"
                        >
                    </iframe>
                </div>
                <div className='footer-body__about'>
                    <FooterAbout title="Контакты:" text={[
                        <b key={0}>Email: </b>, "support@natureflame.by", <br key={1} />,
                        <b key={2}>Тел.: </b>, "+375(29) 333-33-33", <br key={3} />,
                        <b key={4}>Адрес: </b>, "Буларусь, г.Минск, какой-то адрес 223", <br key={5} />
                    ]} />
                    <FooterAbout title="О нас:" text={[
                        <b key={0}>Email: </b>, "support@natureflame.by", <br key={1} />,
                        <b key={2}>Тел.: </b>, "+375(29) 333-33-33", <br key={3} />,
                        <b key={4}>Адрес: </b>, "Буларусь, г.Минск, какой-то адрес 223", <br key={5} />
                    ]} />
                </div>
            </div>
            <div className='footer-copypast'>
                <i>&copy; natureflame.by, {new Date().getFullYear()} Все права защищены.</i>
            </div>
        </footer>
    )
}

export default Footer