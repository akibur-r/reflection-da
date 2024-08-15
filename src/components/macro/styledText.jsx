import './styledText.scss'
import { Icon } from '@iconify/react/dist/iconify.js';

function StyledText({icon, title, subtitle, iconColor}){
  return (
    <div className='styledText' >
        <div className={`icon-container`}>
            <Icon icon={`${icon}`} className={`icon txt-${iconColor} fs-xxl`}/>
        </div>
        <div className="text-container fs-s">
            <h1 className=''>{title}</h1>
            <p>{subtitle}</p>       
        </div>
    </div>
  )
}

export default StyledText