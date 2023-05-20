import './notFound.css'

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <h1 className='not-found-page__code-error'>
                404
            </h1>
            <h2 className='not-found-page__code-message'>Страница не найдена</h2>
        </div>
    )
}

export default NotFound