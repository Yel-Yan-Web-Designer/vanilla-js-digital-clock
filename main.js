/*
TODO - LOGIC 
* GET TODAY DATE  
* THERE ARE BUILT IN FUNCTION FOR CURRENT DAY HOURS, MINUTES AND SECONDS
* SET AM PM MILITARY TIME INTO STARNDARD TIME 
* SETINTERVAL TO COUNT THE CLOCK RUN SETINTERVAL CALLBACK FUNCTION EVERY 1 SECOND === 1000 MS
*/

function getTodayTime () {
    //Get current time
    let today = new Date();

    // get hrs, mins, secs
    let hrs = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();

    //Determine AM PM
    let ampm = hrs < 12 ? "AM" : "PM";
    
    //Convert hours from military time(24hrs) into standard time (12 hrs)
    if( hrs > 12){
        hrs -= 12;
    } else if( hrs === 0){
        hrs = 12;  // hour zero should be 12
    }

    // Display on UI
   return document.querySelector("#timerdisplay").innerHTML = 
    `${formatTime(hrs)} : ${formatTime(mins)} : ${formatTime(secs)} ${ampm}`;
}

function formatTime (time) {
    //if time less than 0 put zero in front of it, else put time
    return time < 10 ? `0${time}` : time;
}

setInterval(getTodayTime, 1000);

/*
Another solution for militray to standard time
hrs = hrs % 12;
hrs = hrs ? hrs : 12;
*/