import './header.css'
import { Link } from 'react-router-dom'
//import { useState, useEffect } from 'react'
import basketIco from '../../img/ico/basket_w.png'
import Logo from '../../components/logo/Logo'
import { useState } from 'react'
import BasketWindow from './BasketWindow/BasketWindow'

import { useSelector } from 'react-redux';




const Basket = (props) => {
    return (
        <>
            <img src={basketIco} height='auto' alt='Корзина' />
            <div className='amount-block'>
                <div className='amount-block__num'>
                    {props.amount}
                </div>
            </div>
        </>
    )
}

const Header = () => {
    const [showCart, setShowCart] = useState(true)
    const cart = useSelector((state) => state.cart)

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }

    const BasketClick = () => {
        setShowCart(!showCart)
    }

    return (
        <header className='header'>
            <div className='container'>
                <Logo />
                <div className='header__menu'>
                    <Link to='/'>Главная</Link>
                    <Link to='/catalog'>Каталог</Link>
                    <Link to='/about-us'>О нас</Link>
                    <Link to='/blog'>Блог</Link>
                    <button
                        className='header__menu--basket'
                        onClick={() => { BasketClick() }}>
                        <Basket amount={getTotalQuantity() || 0} />
                    </button>
                </div>
                {showCart ?
                    <BasketWindow status={'basket-window--inactive'} />
                    :
                    <BasketWindow status={'basket-window--active'}/>
                }
            </div>

        </header>
    )
}

export default Header