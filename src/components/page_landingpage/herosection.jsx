import './herosection.scss';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import StackedText from '../macro/stackedText';

function Herosection(){
  return (
    <div className='herosection'>
        <div className="herosection__textContainer">
            <div className="herosection__heroTitle fs-xxl fw-700">
               <span className="fs-xl fw-600"> আপনার </span> প্রপার্টিকে করুন 
                <span className="txt-primary herosection__heroTitle__colored"> টেকসই</span>
            </div>
            <div className="herosection__tagline fs-l">
                আমাদের কাছে পাবেন সর্বোচ্চ সুবিধাজনক, সাশ্রয়ী এবং নির্ভরযোগ্য সেবার নিশ্চয়তা।
                সেবা নিতে এখনই যোগাযোগ করুন
            </div>

            <div className="herosection__highlights">
                <StackedText
                    title={"প্রকল্প সম্পন্ন"}
                    amountInNumber={'১০'}
                />
                <StackedText
                    title={"প্রকল্প চলমান"}
                    amountInNumber={'২'}
                />

                <a href={'#projects'} className='herosection__highlights__link bg-accent'>
                    আরও দেখুন
                    <Icon icon={"line-md:chevron-small-down" } className='herosection__highlights__link__icon'/>
                </a>
            </div>
        </div>
        <div className="herosection__imageContainer">
            <img src="./building-1.jpg" alt="#" className='herosection__img1'/>
            <img src="./building-2.jpg" alt="#" className='herosection__img2'/>
        </div>
    </div>
  )
}

export default Herosection