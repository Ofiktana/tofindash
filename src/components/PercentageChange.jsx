import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function PercentageChange({ value }) {
  const colorGreen = {color: 'green'}
  const colorRed = {color: 'red'}
  const colorNeutral = {color: 'inherit'}

  if(!(typeof value === 'number')){return}


  return (
    <div style={value == 0 ? colorNeutral : (value > 0? colorGreen : colorRed)}>
      {value == 0 ? '' : (value > 0 ? <FaArrowUp /> : <FaArrowDown />)} 
      {value == 0 ? '' : (value > 0 ? '+' : '')}{value}%
    </div>
  )
}

export default PercentageChange