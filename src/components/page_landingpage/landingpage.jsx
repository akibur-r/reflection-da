import Services from '../page_landingpage/services'
import AboutUs from './aboutUs'
import Herosection from './herosection'
import './landingpage.scss'
import Projects from './projects'

function Landingpage(){
  return (
    <div className='landingpage'>
        <Herosection/>
        <Services/>
        <AboutUs/>
    </div>
  )
}

export default Landingpage