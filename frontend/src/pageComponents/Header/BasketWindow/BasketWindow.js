import './basketWindow.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeItem } from '../../../redux/cartSlice'
import { Link } from 'react-router-dom'

function CartItem({ id, image, title, price, quantity = 0 }) {
    const dispatch = useDispatch()

    return (<>
            <hr />
        <div className="cart-item">
            <button
                className='cart-item__remove-button'
                onClick={() => dispatch(removeItem(id))}>
                x
            </button>
            <img className="cart-item__image" src={image} alt='item' />
            <div className="cart-item__info">
                <h4 className="cart-item__title">{title}</h4>
                <div className="cart-item__price">
                    <strong>{price} <small>BYN</small></strong>
                </div>
                <div className='cart-item__incr-dec'>
                    <button onClick={() => dispatch(decrementQuantity(id))}><b>-</b></button>
                    {quantity}
                    <button onClick={() => dispatch(incrementQuantity(id))}><b>+</b></button>
                </div>
            </div>
        </div>

        </>
    )
}

const TotalPrice = () => {
    const cart = useSelector((state) => state.cart)
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
        totalQuantity += item.quantity
        totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
}

const BasketWindow = (props) => {
    const cart = useSelector((state) => state.cart)
    return (
        <div className={`basket-window ${props.status}`} >
            <p className="total__p">
                Сумма: <strong>
                    {TotalPrice().totalPrice} <small>BYN</small>
                </strong>
                <br />Товаров: <strong>{TotalPrice().totalQuantity}</strong>
            </p>
            {cart?.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                />
            ))}
            {/* Если корзина пуста */}
            {TotalPrice().totalQuantity <= 0 &&
                <div>
                    <p>Здесь пока нет товаров</p>
                    <p>Перейти в <Link to={'./catalog'}><b>каталог</b></Link></p>
                </div>
            }
            {/* Если в корзине что-то есть */}
            {TotalPrice().totalQuantity > 0 &&
                <button className='cart-item__buy-button'>Купить</button>
            }
        </div>
    )
}

export default BasketWindow