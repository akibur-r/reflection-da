import { Link } from 'react-router-dom'
import ServiceCard from '../macro/serviceCard'
import './services.scss'
import '../page_services/services.scss'

function Services(){
  return (
    <div className='services' id='services'>
      <div className="services__heading fs-xl">
        <h1 className='services__heading__title'>আমাদের সেবাসমূহ</h1>
        <Link to={'services'} className='services__heading__link'>সবগুলো দেখুন</Link>
      </div>
      <div className="services__serviceList">
        <ServiceCard 
          icon={'carbon:construction'}
          serviceName={'সম্পুর্ণ বিল্ডিং কনস্ট্রাকশন'}
          titleColor={'primary'}
          serviceDetails={'ভবনের নির্মাণকাজ শুরু থেকে শেষ পর্যন্ত সবকিছু'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'fluent-mdl2:design'}
          serviceName={'আর্কিটেকচারাল প্ল্যানিং'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'icon-park-outline:building-two'}
          serviceName={'স্ট্রাক্চারাল ডিজাইন'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'carbon:soil-moisture'}
          serviceName={'সয়েল টেস্টিং'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'hugeicons:estimate-01'}
          serviceName={'এস্টিমেট এন্ড কস্টিং (BOQ)'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'material-symbols:construction'}
          serviceName={'পুরুনো বাড়ির রিমডেলিং/রিকনস্ট্রাকশন/রেনোভেশন'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
      </div>
    </div>
  )
}

export default Services