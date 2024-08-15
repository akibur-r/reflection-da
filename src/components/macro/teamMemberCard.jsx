import './teamMemberCard.scss';

function TeamMemberCard({name, designation, photoURL, bgColor, txtColor}){
    
    if(!photoURL) photoURL = './person.png';
    if(!bgColor) bgColor = 'primary';
    if(!txtColor) txtColor = 'white';
    if(!name) name = 'Employee Name';
    if(!designation) designation = 'Designation';
  
    return (

    <div className='teamMemberCard'>
        <div className="teamMemberCard__photo">
            <img src={`${photoURL}`} alt="#"/>
        </div>
        <div className={`teamMemberCard__details txt-${txtColor}`}>
            <div className={`teamMemberCard__details__bg bg-${bgColor}`}></div>
            <div className="teamMemberCard__details__textContainer">
                <div className="teamMemberCard__details__name fs-l fw-500">{name}</div>
                <div className="teamMemberCard__details__designation fs-regular">{designation}</div>
            </div>
        </div>
    </div>
  )
}

export default TeamMemberCard