import './catalog.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

let server_src = process.env.REACT_APP_SERVER_SRC

const ProductCard = (props) => {

    const dispatch = useDispatch()

    let productLink = `./product/${props.id}`

    const id = props.id
    const title = props.name
    const image = props.img
    const price = props.cost

    return (
        <div className='catalog__product-card'>
            <div className='catalog__product-card--img'>
                <Link to={productLink}>
                    <img src={image} alt='img' />
                </Link>
            </div>
            <div className='catalog__product-card__content'>
                <div className='catalog__product-card__content--name'>
                    <b><i>{title}</i></b>
                </div>
                <div className='catalog__product-card__content__block'>
                    <div className='catalog__product-card__content__block--cost'>
                        <b>{price} <small>BYN</small></b>
                    </div>
                    <button className='catalog__product-card__content__block--button' 
                      onClick={() => 
                        dispatch(addToCart({
                          id, title, image, price
                        }))
                      }>
                        <b>В корзину</b>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Catalog = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        products()
    }, [])

    const products = async () => {
        const responce = await fetch(`${server_src}api/product/`)

        setProduct(await responce.json())
    }
    console.log(product)
    return (
        <div className='catalog'>
            <div className='container'>
                {product.map((_, i) =>
                    <ProductCard
                        id={product[i].id}
                        img={`${server_src}${product[i].img}`}
                        name={product[i].name}
                        cost={product[i].price}
                        key={i} />
                )}
            </div>
        </div>
    )
}

export default Catalog