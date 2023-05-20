import './smallCatalog.css'

const imgOne = require('../../img/catalog/tovar1.png')
const imgTwo = require('../../img/catalog/tovar2.png')
const imgThree = require('../../img/catalog/tovar3.png')


const SmallCatalog = (props) => {
    //title, img, descriptionTitle, description
    const Product = (props) => {
        return (
            <div className='product'>
                <h3>{props.title}</h3>

                <div className='product__img-description'>
                    <div className='wrapper'>
                        <img src={props.img} alt='' />
                    </div>
                    <div className='product__img-description--text'>
                        <div>
                            <b>{props.descriptionTitle}</b><br />
                            <p>{props.description}</p>
                        </div>
                        <button><b>Подробнее</b></button><br />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='small-catalog'>
            <div className='container'>
                <h2>{props.title}</h2>
                <Product title='Тыквеный хруст' img={imgOne} descriptionTitle='Описание'
                    description='
                    Получите наилучшие ощущения от наших натуральных свечей.
                    Вы заслуживаете теплую ванну, со свечами, с ароматом лаванды, не так ли?'
                />
                <Product title='Цитрусовый аромат' img={imgTwo} descriptionTitle='Описание'
                    description='
                    Получите наилучшие ощущения от наших натуральных свечей.
                    Вы заслуживаете теплую ванну, со свечами, с ароматом лаванды, не так ли?'
                />
                <Product title='Хвойный лес' img={imgThree} descriptionTitle='Описание'
                    description='
                    Получите наилучшие ощущения от наших натуральных свечей.
                    Вы заслуживаете теплую ванну, со свечами, с ароматом лаванды, не так ли?'
                />
            </div>
        </div>
    )
}

export default SmallCatalog