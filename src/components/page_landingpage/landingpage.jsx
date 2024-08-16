import Services from '../page_landingpage/services'
import DocumentTitle from '../utility/documentTitle'
import AboutUs from './aboutUs'
import Footer from './footer'
import Herosection from './herosection'
import './landingpage.scss'

function Landingpage(){
  DocumentTitle("Home");
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