window.onload= startup;


function startup(){
    addNewParkingDate();
}

function addNewParkingDate(){
    let year = parseInt(parkingYear()-1);
    let month = parseInt(parkingMonth()-1);
    let day= parseInt(parkingDay(year, month)-1);
    let hours = parseInt(parkingHour());
    let minutes= parseInt(parkingMinute());

    
   

    //         new Date(year, month, day, hours, minutes, seconds, milliseconds)
  newParking= new Date(year, month, day, hours, minutes, 0, 0 )
  console.log(typeof(newParking) + "\n" + newParking)

}


function parkingYear(){
    let addYear="";

    let thisYear= new Date();
    thisYear = thisYear.getFullYear();
    alert(thisYear+1);


    //Check that its either this or next year, due to it might be on new years eve
    while(addYear <thisYear || addYear > thisYear+1 || addYear ==""|| isNaN(addYear)){
        addYear =  prompt("What Year");
        addYear = parseInt(addYear)


        
        if(addYear <thisYear || addYear > thisYear+1 || addYear ==NaN ||isNaN(addYear)){
            alert("Invalid year!\n Only valid years are " + thisYear +" and " 
            +thisYear + "! \n Try again.")
        }
    }

    return addYear;
}

function parkingMonth(){
    let addMonth="";
    while(addMonth <  1|| addMonth > 12 || addMonth =="" || isNaN(addMonth)){
        addMonth =  prompt("What month number?");
        addMonth = parseInt(addMonth);
        console.log(typeof(addMonth) + " " +addMonth);
        if(addMonth <  1|| addMonth > 12 || addMonth =="" || isNaN(addMonth)){
            alert("Invalid month!\n Only valid  numbers are from 1 up to 12! \n Try again!")
        }
    }

    return addMonth;
}

function parkingDay(year, month){
    addDay= ""
    numberOfDaysInMonth = new Date(year, month, 0).getDate();
    

    while(addDay<  1|| addDay > numberOfDaysInMonth || addDay =="" || isNaN(addDay)){
        addDay =  prompt("What Day number?");
        addDay = parseInt(addDay)
        if(addDay<  1|| addDay > numberOfDaysInMonth || addDay =="" || isNaN(addDay)){
            alert("Invalid day!\n Only valid  numbers are from 1 up to "+ 
            numberOfDaysInMonth+ "! \n Only v Try again!");
        }
    }

    return addDay;
}

function parkingHour(){
    let addHour="";
    while(addHour < 0 || addHour > 23 || addHour ==""|| isNaN(addHour)){
        addHour =  prompt("What hour?");
        addHour = parseInt(addHour)
        if(addHour < 0 || addHour > 23 || addHour ==""|| isNaN(addHour)){
            alert("Invalid hour! \n Only valid  numbers are from 0 up to 23! \nTry again!")
        }

    }

    return addHour;
}

function parkingMinute(){
    let addMinute="";
    while(addMinute <  0|| addMinute > 59 || addMinute ==""|| isNaN(addMinute)){
        addMinute =  prompt("What minute of the hour?");
        addMinute = parseInt(addMinute)
        if(addMinute <  0|| addMinute > 59 || addMinute ==""|| isNaN(addMinute)){
            alert("Invalid minute! \n Only valid minutes are from 0 up to 59§ \n Try again!")
        }
    }

    return addMinute;
}


