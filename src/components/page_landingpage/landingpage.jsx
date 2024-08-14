import Services from '../page_landingpage/services'
import Herosection from './herosection'
import './landingpage.scss'
import Projects from './projects'

function Landingpage(){
  return (
    <div className='landingpage'>
        <Herosection/>
        <Services/>
        <Projects/>
    </div>
  )
}

export default Landingpage