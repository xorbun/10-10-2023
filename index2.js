const localStorageKey="time_memory"
let counter=document.getElementById("second")
let test=sessionStorage.getItem(localStorageKey)
let seconds=0
if(isNaN(test))
{
    seconds=0
    setInterval(incrementSeconds,1000)
}
else
{
    
    seconds=parseInt(test)
    setInterval(incrementSeconds,1000)
}

function incrementSeconds()
{
    seconds += 1;
    sessionStorage.setItem(localStorageKey,seconds)
    counter.innerText = "You have been here for " + seconds + " seconds." ;
}
    

    