
setInterval(update,100);

function update()
{
    let date  =  new Date();
    let myvar = document.getElementById("mylabel");
    myvar.innerHTML = displaytime(date);
}
function displaytime(date){
    let hours =  date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
   seconds = seconds<10 ? `0${seconds}`:seconds;
    let amorpm = hours <12 ? 'am' : 'pm';
    
    return `${hours}:${min}:${seconds} ${amorpm}`;
}