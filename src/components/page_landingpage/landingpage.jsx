import Services from '../page_landingpage/services'
import AboutUs from './aboutUs'
import Footer from './footer'
import Herosection from './herosection'
import './landingpage.scss'

function Landingpage(){
  return (
    <div className='landingpage'>
        <Herosection/>
        <Services/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Landingpage