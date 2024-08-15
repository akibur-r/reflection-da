import { Link } from 'react-router-dom'
import LinkButton from '../macro/linkButton'
import './footer.scss'

function Footer(){
  return (
    <div className='footer bg-accent-black txt-white'>
        <div className="footer__upperSection">
            <LinkButton
                linkTitle={'হোয়াটসঅ্যাপ'}
                href={'https://dm.wa.link/qgzslw'}
                linkContent={'01830-262614'}
                icon={'ri:whatsapp-line'}
                bgColor={'green'}
                txtColor={'black'}
                linkType={'tel'}
                target={'blank'}
            />
            <LinkButton
                linkTitle={'ইমেইল পাঠান'}
                href={'mailto:akibur.pciu@gmail.com'}
                linkContent={'akibur.pciu@gmail.com'}
                icon={'ic:outline-email'}
                bgColor={'accent'}
                txtColor={'black'}
                linkType={'mailto'}
                target={'blank'}
            />
            <LinkButton
                linkTitle={' '}
                href={'https://www.facebook.com/ReflectionDA'}
                linkContent={'ফেসবুকে দেখুন'}
                icon={'ant-design:facebook-outlined'}
                bgColor={'primary'}
                txtColor={'white'}
                target={'blank'}
            />
        </div>

        <div className="footer__lowerSection">
            <span className="footer__lowerSection__copyright">
                © 2024 | Reflection Design & Architect
            </span>
            <span className="footer__lowerSection__developer">
                Website Developed by 
                <Link to={'https://akibur-r.github.io'} target='_blank' className='footer__lowerSection__developer__link txt-secondary'> Akib</Link>
            </span>
        </div>
    </div>
  )
}

export default Footer