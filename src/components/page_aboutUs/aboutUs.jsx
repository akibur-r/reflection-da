import { Icon } from '@iconify/react/dist/iconify.js'
import StyledText from '../macro/styledText'
import TeamMemberCard from '../macro/teamMemberCard'
import DocumentTitle from '../utility/documentTitle'
import './aboutUs.scss'

function AboutUs(){
    DocumentTitle("About Us")

  return (
    <div className='aboutUs' id='aboutUs'>
        <div className="aboutUs__heading pageHeading">
            <h1 className="aboutUs__heading__title pageHeading__title fs-xl">আমাদের সম্পর্কে</h1>
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
            <div className="aboutUs__content__subsection aboutUs__teamMembers">
                <TeamMemberCard
                    photoURL={'../../arif.jpg'}
                    name={'আরিফুর রহমান'}
                    designation={'স্ট্রাকচারাল ইঞ্জিনিয়ার'}
                />
                <TeamMemberCard
                    photoURL={'../../rashed.jpg'}
                    name={'রাশেদুল ইসলাম রিপন'}
                    designation={'আর্কিটেকচার কনসালট্যান্ট'}
                />
                <TeamMemberCard
                    photoURL={'../../sohel.jpg'}
                    name={'মোহাম্মদ সোহেল'}
                    designation={'সিভিল ইঞ্জিনিয়ার'}
                />
            </div>

            <h2 className='aboutUs__content__heading'>
                আমাদের বৈশিষ্ট্য
                <Icon icon={'ri:arrow-down-double-fill'} className='txt-primary'/> 
            </h2>

            <div className="aboutUs__content__subsection aboutUs__characteristics">
                <StyledText
                    icon={'mingcute:building-2-line'}
                    title={'নিত্যনতুন ডিজাইন'}
                    subtitle={'প্রয়োজন অনুযায়ী উদ্ভাবনী ডিজাইন করা হয়'}
                    iconColor={'accent-black'}
                />
                <StyledText
                    icon={'streamline:ai-technology-spark'}
                    title={'দক্ষ ইঞ্জিনিয়ার'}
                    subtitle={'আমাদের আছে একঝাঁক মেধাবী এবং দক্ষ ইঞ্জিনিয়ার'}
                    iconColor={'accent-black'}
                />
                <StyledText
                    icon={'grommet-icons:technology'}
                    title={'উন্নত প্রযুক্তি'}
                    subtitle={'আমাদের কাজগুলো উন্নত প্রযুক্তির ব্যবহারে করা হয়'}
                    iconColor={'accent-black'}
                />
            </div>
        </div>
    </div>
  )
}

export default AboutUs