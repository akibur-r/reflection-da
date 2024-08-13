import './stackedText.scss'

function StackedText({title, amountInMoney, amountInNumber, lang}){
let amount = '0';

if(amountInMoney) amount = '$' + amountInMoney;
if(amountInNumber) amount = amountInNumber + 'টি';
  return (
    <div className='stackedText'>
        <div className="stackedText__content">{amount}</div>
        <div className="stackedText__title">{title}</div>
    </div>
  )
}

export default StackedText