import { Icon } from '@iconify/react/dist/iconify.js';
import './serviceCard.scss';

function ServiceCard({serviceName, titleColor, serviceDetails, actionBtnText, actionBtnTxtColor, actionBtnBG,icon, iconBG, iconColor}){

    if(!serviceName) serviceName = 'Service Name';
    if(!serviceDetails) serviceDetails = 'Short Service Details';
    if(!actionBtnText) actionBtnText = 'Take Service';
    if(!icon) icon = 'file-icons:default';
    if(!iconBG) iconBG = 'accent-black';
    if(!iconColor) iconColor = 'white';
    if(!titleColor) titleColor = 'primary'
    if(!actionBtnTxtColor) actionBtnTxtColor = 'black';
    if(!actionBtnBG) actionBtnBG = 'accent';

  return (
    <div className='serviceCard bg-white'>
        <Icon icon={`${icon}`} className={`serviceCard__icon bg-${iconBG} txt-${iconColor}`}/>
        <h4 className={`serviceCard__title txt-${titleColor}`}>{serviceName}</h4>
        <p className="serviceCard__serviceDetails">{serviceDetails}</p>
        <a href={'#services'} className={`serviceCard__linkButton bg-${actionBtnBG} fw-500`}>{actionBtnText}</a>
    </div>
  )
}

export default ServiceCard