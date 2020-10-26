window.onload = startup;
var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]


var user = [42066669, "Kim_Jong_Trump"]


var parkingHouseReservationInfo = [
    [1, "BRA VEIEN 6a Halden", 1, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 2, "EasyPark", "", "", 12345678, "NaN"],
    [1, "BRA VEIEN 6a Halden", 3, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 4, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 5, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 6, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

    [2, "MOSSE VEIEN 53b Fredrikstad", 1, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 2, "NotSoEasyPark", "", "", 12345678, "NaN"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 3, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 4, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 5, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 6, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [3, "Ant 23 Moss", 1, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [3, "Ant 23 Moss", 2, "BadSpot", "", "", 12345678, "NaN"],
    [3, "Ant 23 Moss", 3, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [3, "Ant 23 Moss", 4, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [3, "Ant 23 Moss", 5, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [3, "Ant 23 Moss", 6, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [4, "MaurStien 17 Halden", 1, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [4, "MaurStien 17 Halden", 2, "HandiCapSpot", "", "", 12345678, "NaN"],
    [4, "MaurStien 17 Halden", 3, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time", 68516969, "Robbie_Rotten"],
    [4, "MaurStien 17 Halden", 4, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [4, "MaurStien 17 Halden", 5, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [4, "MaurStien 17 Halden", 6, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

]

function startup() {
    getByCity = document.getElementById("searchCityButton");
    getByCity.addEventListener("click", getCityLocations);


    selectButton = document.getElementById("selectButton");
}

function addNewParkingDate() {
    let year = parseInt(parkingYear());
    let month = parseInt(parkingMonth() - 1);
    let day = parseInt(parkingDay(year, month) - 1);
    let hours = parseInt(parkingHour());
    let minutes = parseInt(parkingMinute());




    //         new Date(year, month, day, hours, minutes, seconds, milliseconds)
    newParking = new Date(year, month, day, hours, minutes, 0, 0)
    console.log("STARTING TIME" + typeof (newParking) + "\n" + newParking)


    alert("Please enter when you wish parking to end")
    endTime = endOfParking(year, month, day, hours, minutes)
    let startAndEnd = [newParking, endTime]

    return startAndEnd;

}


function parkingYear() {
    let addYear = "";

    let thisYear = new Date();
    thisYear = thisYear.getFullYear();



    //Check that its either this or next year, due to it might be on new years eve. This makes it a limited time.
    while (addYear < thisYear || addYear > thisYear + 1 || addYear == "" || isNaN(addYear)) {
        addYear = prompt("What Year");
        addYear = parseInt(addYear)



        if (addYear < thisYear || addYear > thisYear + 1 || addYear == NaN || isNaN(addYear)) {
            alert("Invalid year!\n Only valid years are " + thisYear + " and "
                + (thisYear + 1) + "! \n Try again.")
        }
    }

    return addYear;
}

function parkingMonth() {
    let addMonth = "";
    while (addMonth < 1 || addMonth > 12 || addMonth == "" || isNaN(addMonth)) {
        addMonth = prompt("What month number?");
        addMonth = parseInt(addMonth);
        console.log(typeof (addMonth) + " " + addMonth);
        if (addMonth < 1 || addMonth > 12 || addMonth == "" || isNaN(addMonth)) {
            alert("Invalid month!\n Only valid  numbers are from 1 up to 12! \n Try again!")
        }
    }

    return addMonth;
}

function parkingDay(year, month) {
    addDay = ""
    numberOfDaysInMonth = new Date(year, month, 0).getDate();


    while (addDay < 1 || addDay > numberOfDaysInMonth || addDay == "" || isNaN(addDay)) {
        addDay = prompt("What Day number?");
        addDay = parseInt(addDay)
        if (addDay < 1 || addDay > numberOfDaysInMonth || addDay == "" || isNaN(addDay)) {
            alert("Invalid day!\n Only valid  numbers are from 1 up to " +
                numberOfDaysInMonth + "! \n Only v Try again!");
        }
    }

    return addDay;
}

function parkingHour() {
    let addHour = "";
    while (addHour < 0 || addHour > 23 || addHour == "" || isNaN(addHour)) {
        addHour = prompt("What hour?");
        addHour = parseInt(addHour)
        if (addHour < 0 || addHour > 23 || addHour == "" || isNaN(addHour)) {
            alert("Invalid hour! \n Only valid  numbers are from 0 up to 23! \nTry again!")
        }

    }

    return addHour;
}

function parkingMinute() {
    let addMinute = "";
    while (addMinute < 0 || addMinute > 59 || addMinute == "" || isNaN(addMinute)) {
        addMinute = prompt("What minute of the hour?");
        addMinute = parseInt(addMinute)
        if (addMinute < 0 || addMinute > 59 || addMinute == "" || isNaN(addMinute)) {
            alert("Invalid minute! \n Only valid minutes are from 0 up to 59§ \n Try again!")
        }
    }

    return addMinute;
}


function endOfParking(startYear, startMonth, startDay, startHours, startMinutes) {
    let year = parseInt(parkingYear());
    while (year < startYear) {
        alert("Parking cant end at a year that happend before the parking started. Try again.")
        year = parseInt(parkingYear());
    }

    let month = parseInt(parkingMonth() - 1);



    while (year === startYear && month < startMonth) {
        alert("Parking cant end at month that happend befor parking started. Try again")
        month = parseInt(parkingMonth() - 1);
    }

    let day = parseInt(parkingDay(year, month) - 1);
    while (year === startYear && month === startMonth && day < startDay) {
        alert("Parking cant end at a day before parking started. Try again")
        day = parseInt(parkingDay(year, month) - 1);
    }

    let hours = parseInt(parkingHour());
    while (year === startYear && month === startMonth && day === startDay && hours < startHours) {
        alert("Parking cant end at  time before the parking started. Try agfain");
        hours = parseInt(parkingHour());
    }

    let minutes = parseInt(parkingMinute());
    console.log("STARTMINUTE:  " + startMinutes + "NEW MINUTES" + minutes)
    while (year === startYear && month === startMonth && day === startDay && hours === startHours && minutes < startMinutes) {
        alert("Parking cant end at  time before the parking started. Try agfain");
        hours = parseInt(parkingHour());
    }

    parkingEnding = new Date(year, month, day, hours, minutes, 0, 0)
    
    return parkingEnding;
}

function addToInfoList() {
    let timeInfo = addNewParkingDate();

    let startInfo = timeInfo[0];
    let endInfo = timeInfo[1];
    targetedHouseID = parseInt(writeTargetId())
    //NEED TO ADD TARGET HOUSE ID


    //checks if the target ID matches that house 
    checker:
    for (let i = 0; i < parkingHouseReservationInfo.length; i++) {

        if (parkingHouseReservationInfo[i][0] == targetedHouseID) {

            //if it does it adds a can be added variable the is always false unless the condition is met
            canBeAdded = false;
            //Loops thru all the spots in the targeted house
            for (let m = 0; m = parkingHouseReservationInfo.length; m++) {
                checkCurrent = parkingHouseReservationInfo[m]

                //saves the spotId for later to check if all the info on that spot has been looped thru
                currentSpotID = checkCurrent[2]

                //check if starting time is after the exsisting one, then check if its before it ends
                for (let b = 0; b < parkingHouseReservationInfo.length; b++) {


                    //Checks if the new info does not collide with anything 
                    //checks if it starts before or after the current info
                    if (startInfo < checkCurrent[4] || startInfo > checkCurrent[5]) {
                        //If it does it will check if it ends before the start or after the end    
                        if (endInfo < checkCurrent[4] || endInfo > checkCurrent) {
                            canBeAdded = true;
                        }
                        //If it doesnt it will be added to false
                        else {
                            canBeAdded = false;
                        }
                    }
                    else {
                        canBeAdded = false
                    }

                    //When it has been detected that all the info on that parking spot has been looped thru it will check if can be added is true, 
                    if (currentSpotID != parkingHouseReservationInfo[m][2]) {
                        //If it is true it will break the entire search alogythem and add the new info to a list later
                        if (canBeAdded == true) {
                            break checker;
                        }
                    }
                }

            }
        }
    }



    if (canBeAdded == true) {
        let addToParkingHouseReseveation = [targetedHouseID, getAdress(targetedHouseID), currentSpotID, getCompanyName(targetedHouseID), startInfo, endInfo, user[0], user[1]]
        parkingHouseReservationInfo.push(addToParkingHouseReseveation);
    }
    //Current format on ParkingHosueReservationList [[]] = 
    //parkinghosueId[0], adress[1], parkingspotID[2], ownerCompanyUserName[3], date and time of begging of  reservation[4], date time of ending of reservation[5], user phone number[6], brukersbrukernavn[7]
}

function getAdress(id) {
    for (let i = 0; i < parkingHouseReservationInfo; i++) {
        if (parkingHouseReservationInfo[i] === id) {
            return parkingHouseReservationInfo[1]
        }
    }
}
function getCompanyName(id) {
    for (let i = 0; i < parkingHouseReservationInfo; i++) {
        if (parkingHouseReservationInfo[i] === id) {
            return parkingHouseReservationInfo[3]
        }
    }
}


function writeTargetId() {
    let addYear = "";

    let targetId = ""
    let exsistInList = false;




    while (exsistInList == false) {
        targetId = prompt("Write the prefered parkinghouseId");
        targetId = parseInt(targetId)

        for (let i = 0; i < parkingInfoList.length; i++) {
            if (parkingInfoList[i][0] == targetId)
                exsistInList = true;
        }


    }

    return id;
}