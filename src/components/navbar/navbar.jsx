import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar(){
  return (
    <div className='navbar  txt-black fs-regular'>
        <Link to={'/'} className="navbar__logoContainer txt-white">
            <img src="./logo.png" alt="#" className='navbar__logo'/>
        </Link>

        <div className="navbar__menu">
            <Link to={'about'} className='navbar__menu__link fw-500'>আমাদের সম্পর্কে</Link>
            <Link to={'services'} className='navbar__menu__link fw-500'>সেবাসমূহ</Link>
            <Link to={'projects'} className='navbar__menu__link fw-500'>প্রকল্পসমূহ</Link>
            <Link to={'contact'} className='navbar__menu__link fw-500 active'>যোগাযোগ করুন</Link>
        </div>
    </div>
  )
}

export default Navbar