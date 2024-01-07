function checkLeapYear(year){
    const CheckYear= year % 4;
    if(CheckYear ==  0){
        return true;
    }
    else{
    return false;
    }
}
const LeapYear=checkLeapYear(2024) ;
console.log(LeapYear); 