import './body.css'

import {Link} from 'react-router-dom'

const Body = () => {
    return (
        <div className='main-page'>
            <div className='container'>
                <div className='content'>
                    <div className='content__first'>
                        <h1 className='content__first--title'>Nature Flame</h1>
                    </div>
                    <div className='content__second'>
                        <div>
                            <p><i>Получите расслабление всего за пару кликов</i></p>
                            <h2>Ощущение спокойствия и уюта.</h2>
                        </div>
                        <iframe width="100%" height="70%"
                            src="https://www.youtube.com/embed/PP4aV0CgBG8"
                            title="YouTube video player"
                            frameBorder={0}
                        
                            >
                        </iframe>
                        <div>
                            <p className='content__second__description'>
                                Получите наилучшие ощущения от наших натуральных свечей.
                                <br />Вы заслуживаете теплую ванну, со свечами, с ароматом лаванды, не так ли?
                            </p>
                            <Link to='/about-us'><u>Узнать больше</u></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body