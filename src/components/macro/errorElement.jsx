import { Link } from 'react-router-dom'
import './errorElement.scss'
import { Icon } from '@iconify/react/dist/iconify.js'

function ErrorElement(){
  return (
    <div className='errorElement'>
        <div className="errorElement__heading">
            <Icon icon={'humbleicons:exclamation'} className='errorElement__heading__icon fs-xxl bg-red txt-white'/>
        </div>
        <div className="errorElement__content">
            <h1 className="errorElement__content__title fs-xl fw-600">
                পেজটি এখন তৈরী করা হয়নি
            </h1>
            <Link to={'/'} className='errorElement__content__link bg-primary txt-white'>
            <Icon icon={'ion:arrow-back-outline'} />
             মূল পেজে ফিরে যান
            </Link>
        </div>
    </div>
  )
}

export default ErrorElement