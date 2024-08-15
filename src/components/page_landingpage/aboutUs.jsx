import { Link } from 'react-router-dom'
import './aboutUs.scss'
import TeamMemberCard from '../macro/teamMemberCard'
import { Icon } from '@iconify/react/dist/iconify.js'

function AboutUs(){
  return (
    <div className='aboutUs'>
        <div className="aboutUs__heading sectionHeading">
            <h1 className="aboutUs__heading__title sectionHeading__title fs-xl">আমাদের সম্পর্কে</h1>
            <Link to={'about'} className='aboutUs__heading__link sectionHeading__link'>পুরোটা দেখুন</Link>
        </div>
        <div className="aboutUs__content">
            <p className="aboutUs__companyOverview">
                <mark className='bg-accent'>
                    "রিফ্লেকশন ডিজাইন এন্ড আর্কিটেক্ট" চট্টগ্রামের অন্যতম প্রপার্টি ডেভেলপমেন্ট কোম্পানি। ১০টির বেশি উন্নতমানের সেবা নিয়ে তারা বর্তমানে দক্ষিণ চট্টগ্রামে সরাসরি, এবং সারা বাংলাদেশে অনলাইনের মাধ্যমে কার্যক্রম চালিয়ে যাচ্ছে।
                </mark>
            </p>
            <h2 className='aboutUs__content__heading'>
                আমাদের টিম
                <Icon icon={'ri:arrow-down-double-fill'} className='txt-primary'/> 
            </h2>
            <div className="aboutUs__teamMembers">
                <TeamMemberCard
                    photoURL={'./arif.jpg'}
                    name={'আরিফুর রহমান'}
                    designation={'স্ট্রাকচারাল ইঞ্জিনিয়ার'}
                />
                <TeamMemberCard
                    photoURL={'rashed.jpg'}
                    name={'রাশেদুল ইসলাম রিপন'}
                    designation={'আর্কিটেকচার কনসালট্যান্ট'}
                />
                <TeamMemberCard
                    photoURL={'./sohel.jpg'}
                    name={'মোহাম্মদ সোহেল'}
                    designation={'সিভিল ইঞ্জিনিয়ার'}
                />
            </div>
        </div>
    </div>
  )
}

export default AboutUs