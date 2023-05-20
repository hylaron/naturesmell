import './product.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

let server_src = process.env.REACT_APP_SERVER_SRC

const Product = () => {
    const dispatch = useDispatch()
    //Получение id продукта
    const params = useParams();
    const prodId = params.id;

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line
    }, [])

    const getProduct = async () => {
        const responce = await fetch(`${server_src}api/product/${prodId}`)

        setProduct(await responce.json())
    }
    console.log(product)

    const ProductInfoDescription = () => {
        return (
            <div className='product-page__info--description'>
                {product.info.map((infoItem, index) => (
                    <div key={index}>
                        <h3>{infoItem.title}</h3>
                        <p>{infoItem.description}</p>
                    </div>
                ))}
            </div>

        )
    }

    
    const id = product.id
    const title = product.name
    const image = `${server_src}${product.img}`
    const price = product.price
    return (
        <div className='product-page'>
            <div className='container'>
                <div className='product-page__img'>
                    <img src={`${server_src}${product.img}`} alt='Изображение товара' />
                </div>
                <div className='product-page__info'>
                    <div className='product-page__info--title'>
                        <h1>{product.name}</h1><br />
                        <h2>{product.price} BYN</h2>
                    </div>
                    
                    {product.info ? <ProductInfoDescription /> : <div>Нет описания</div>}

                    <div className='product-page__info--button'>
                        <button onClick={() => 
                        dispatch(addToCart({
                            id, title, image, price
                        }))
                      }> Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product