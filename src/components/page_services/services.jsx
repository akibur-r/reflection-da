import ServiceCard from '../macro/serviceCard'
import DocumentTitle from '../utility/documentTitle'
import './services.scss'

function Services(){
  DocumentTitle('Services');
  
  return (
    <div className='services' id='services'>
      <h1 className="services__heading pageHeading fs-xl">
        আমাদের সেবাসমূহ
      </h1>
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
          icon={'fluent-mdl2:hexadite-investigation'}
          serviceName={'কোয়ালিটি কন্ট্রোল'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'ph:circuitry'}
          serviceName={'ইলেকট্রিক্যাল ডিজাইন'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'material-symbols-light:design-services-outline-rounded'}
          serviceName={'ইন্টেরিয়র ডিজাইন ও ডেভেলপমেন্ট'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'game-icons:wooden-fence'}
          serviceName={'প্লাম্বিং ডিজাইন'}
          titleColor={'primary'}
          serviceDetails={'দক্ষ ইঞ্জিনিয়ার দ্বারা সয়েল টেস্টিং করানো হয় এখানে'}
          actionBtnText={'সেবা নিন'}
          actionBtnBG={'accent'}
        />
        <ServiceCard 
          icon={'carbon:inspection'}
          serviceName={'সাইট সুপারভিশন'}
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
          icon={'tabler:map'}
          serviceName={'ডিজিটাল সার্ভে'}
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