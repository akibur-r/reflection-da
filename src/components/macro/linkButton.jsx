import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import './linkButton.scss';

function LinkButton({linkTitle, href, icon, linkContent, txtColor, bgColor, target}){
    if(!linkTitle) linkTitle = 'Headline';
    if(!linkContent) linkContent = 'Content';
    if(!bgColor) bgColor = 'primary';
    if(!txtColor) txtColor = 'white';

    if(!target) target = 'self';

  return (
    <Link to={`${href}`} target={`_${target}`} preventScrollReset className={`linkButton bg-${bgColor} txt-${txtColor}`}>
        <div className="linkButton__heading">
            <Icon icon={`${icon}`} />
             {linkTitle}
        </div>
        <div className="linkButton__content fw-600">
            {linkContent}
        </div>
    </Link>
  )
}

export default LinkButton