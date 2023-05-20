import { Link } from 'react-router-dom'
import './logo.css'
import logoImg from '../../img/logo5.png'

const Logo = () => {
    return (
        <Link to='/' className='logo'>
            <img src={logoImg} alt='Logo' height={40} />
            <h3 className='logo--text'>
                NATURE FLAME
            </h3>
        </Link>
    )
}

export default Logo