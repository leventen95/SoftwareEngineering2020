window.onload = startup;

//Currrent format on Parking House List[] =
// adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]
var nearByParkingList = [];

var user = [42066669, "Kim_Jong_Trump"]

//parkinghosueId[0], adress[1], parkingspotID[2], ownerCompanyUserName[3], date and time of begging of  reservation[4], date time of ending of reservation[5], user phone number[6], brukersbrukernavn[7]
var parkingHouseReservationInfo = [
    [1, "BRA VEIEN 6a Halden", 1, "EasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 2, "EasyPark", new Date(""), new Date(""), 12345678, "NaN"],
    // [1, "BRA VEIEN 6a Halden", 2, "EasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],

    [1, "BRA VEIEN 6a Halden", 3, "EasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 4, "EasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 5, "EasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 6, "EasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],

    [2, "MOSSE VEIEN 53b Fredrikstad", 1, "NotSoEasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Speedy_Gonzales"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 2, "NotSoEasyPark", new Date(""), new Date(""), 12345678, "NaN"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 3, "NotSoEasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 68516969, "Robbie_Rotten"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 4, "NotSoEasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 23401669, "Hipster_Jesus"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 5, "NotSoEasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 6, "NotSoEasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],

    [3, "Ant 23 Moss", 1, "BadSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Speedy_Gonzales"],
    [3, "Ant 23 Moss", 2, "BadSpot", new Date(""), new Date(""), 12345678, "NaN"],
    [3, "Ant 23 Moss", 3, "BadSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 68516969, "Robbie_Rotten"],
    [3, "Ant 23 Moss", 4, "BadSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 23401669, "Hipster_Jesus"],
    [3, "Ant 23 Moss", 5, "BadSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [3, "Ant 23 Moss", 6, "BadSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],


    [4, "MaurStien 17 Halden", 1, "HandiCapSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Speedy_Gonzales"],
    [4, "MaurStien 17 Halden", 2, "HandiCapSpot", new Date(""), new Date(""), 12345678, "NaN"],
    [4, "MaurStien 17 Halden", 3, "HandiCapSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time"), 68516969, "Robbie_Rotten"],
    [4, "MaurStien 17 Halden", 4, "HandiCapSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 23401669, "Hipster_Jesus"],
    [4, "MaurStien 17 Halden", 5, "HandiCapSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [4, "MaurStien 17 Halden", 6, "HandiCapSpot", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],

]

function startup() {
    getByCity = document.getElementById("searchCityButton");
    getByCity.addEventListener("click", getInputFromDocument);


    selectButton = document.getElementById("selectButton");
}

//Currrent format is [] = adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 


//Searches for all parking houses in the city by name

function getInputFromDocument() {
    let city = document.getElementById("searchCityInput").value;
    getCityLocations(city);
}

function getCityLocations(city) {
    let checkIfFound = false;

    if (findCityInList(city)) checkIfFound = true;

    if (checkIfFound) {
        createNearbyList(nearByParkingList)
        //TEST ADD COMMENT ABOVE FOR TESTING AND REMOVE THE COMMENT UNDER, REVERSE FOR FRONT END USAGE
        //return nearByParkingList;
    }

    else {
        alert("No parking found nearby!");
        return;
    }
}

function findCityInList(findCity) {
    let checkIfFound = false;
    for (const houseInList of parkingHouseList) {
        let current = houseInList;
        if (findCity.toLowerCase() === current[1].toLowerCase()) {
            nearByParkingList.push(current);
            checkIfFound = true;
        }
    }
    return checkIfFound;
}




//NOT SURE IF I CAN TEST THIS
function createNearbyList(returnList) {
    //THis is where the list shoudl be in the HTML
    let HTMLDropDown = document.getElementById("DropDown");
    let dropDownList = '<option value="all">All</option>';

    let city;
    let adress;
    let parkingId;

    //Creates a drop down list to select from
    //Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName
    // number of spots,  unike ID of parking house */
    for (const info of returnList) {
        adress = info[0]
        city = info[1];
        parkingId = info[6]

        dropDownList = dropDownList + '<option value="'
            + parkingId + '">' + adress + " " + city +
            '</option>';
    }


    HTMLDropDown.innerHTML = "<select name ='NearbySelector' id='parkingHouseListNearby'>"
        //onclick="getParkingHouseInfo()
        + dropDownList + "</select>" + " " + '<button type="button" id ="selectButton" onclick="getSelectHouseId()" ">Select</button>';
}
var showInfoList = [];

//checks if ID exsist if it does it adds it to show list
function checkIfIdExsist(id) {
    let lock = false;

    for (const index of parkingHouseReservationInfo) {
        indexHouseId = index[0]

        if (indexHouseId === id) {
            showInfoList.push(index)
            lock = true;
        }
    }
    return lock;
}



function getSelectHouseId() {
    let selectedHouseId = document.getElementById("parkingHouseListNearby").value;
    createParkingHouseInfo(selectedHouseId)
}


//CALLED BY ON CLICK BUTTON, IN HTML SCRIPT INJECTED!
function createParkingHouseInfo(selectedHouseId) {
    let status = false;
    if (selectedHouseId === "all") {

        for (const lines of nearByParkingList) {
            //Loops thu all ids that we had in nearbyparking list, checks and ads them to show list
            status = checkIfIdExsist(lines[6])
        }
    }

    else status = checkIfIdExsist(parseInt(selectedHouseId))

    //Hides user info for unecasry eyes
    for (const eachLine of showInfoList) {
        eachLine.pop()
        eachLine.pop()
    }

    if (showInfoList[0] === null) return status

    else {
        createTable(showInfoList);
        //TEST ADD COMMENT ABOVE FOR TESTING AND REMOVE THE COMMENT UNDER REVERSE FOR FRONT END USAGE
        //return showInfoList;
    }
}

function createTable(parkingInfoList) {
    sortShowList();
    let table = "";

    for (const lines of parkingInfoList) {
        let addRow = lines.join("</td><td>");
        table += "<tr><td>" + addRow + "</td></tr>";
    }

    let tableHeader = "<tr><th>ParkignHouseId</th><th>Adress</th><th>ParkingSpotId</th><th>Owner Company</th><th>Occupied from</th><th>Occupied to</th></tr>"

    HTMLtable = document.getElementById("tableList");
    HTMLtable.innerHTML = "<table border='1'>" + tableHeader + table + "</table>";

    addParkingButton = document.getElementById("parkingAdd")

    addParkingButton.innerHTML = '<button type="button" id ="addParkingButton" onclick="addToInfoList()" ">Regrister a reservation</button>'
}

function sortShowList() {

    showInfoList = showInfoList.sort(function (a, b) {
        return a[4] - b[4];
    });

    //SORTS BY SECOND COLLUM, THATS IS BY PARKINGSSPOT ID
    showInfoList = showInfoList.sort(function (a, b) {
        return a[2] - b[2];
    });
    //SORTS IT THEN BY FIRST COLLUM TO MAKE IT MORE READABLE

    showInfoList = showInfoList.sort(function (a, b) {
        return a[0] - b[0];
    });
}



function addToInfoList() {
    let timeInfo = addNewParkingDate();
    alert(timeInfo)
    let startInfo = timeInfo[0]; //starting parking info
    let endInfo = timeInfo[1];  //ending parking info
    targetedHouseID = parseInt(writeTargetId())

    let currentSpotID;

    if (checkIfAvaibleSpot(startInfo, endInfo)) {

        let newParkingAdress = getAdress(targetedHouseID);
        let newParkingCompanyName = getCompanyName(targetedHouseID);

        let addToParkingHouseReseveation = [targetedHouseID, newParkingAdress, currentSpotID, newParkingCompanyName, startInfo, endInfo, user[0], user[1]]
        parkingHouseReservationInfo.push(addToParkingHouseReseveation);

        alert("New parking regristered. Starting at :"
            + startInfo + "\n Endig at: " + endInfo + "\n At " + addToParkingHouseReseveation[1])
    }

    else {
        alert("No spots avaible at that time on selcted house ")
    }

    //Current format on ParkingHosueReservationList [[]] = 
    //parkinghosueId[0], adress[1], parkingspotID[2], ownerCompanyUserName[3], date and time of begging of  reservation[4], date time of ending of reservation[5], user phone number[6], brukersbrukernavn[7]
}

function checkIfAvaibleSpot(startInfo, endInfo) {
    currentSpotIDSecondCheck = ""
    let canBeAdded = true
    //For each spot in the house
    for (let i = 0; i < parkingHouseReservationInfo.length; i++) {
        let parkingInfoSpot = parkingHouseReservationInfo[i];
        if (parkingInfoSpot[0] == targetedHouseID) {

            //saves the spotId for later to check if all the info on that spot has been looped thru
            let currentSpotIDFirstCheck = parkingInfoSpot[2];
            let checkCurrentStartDate = parkingInfoSpot[4]
            let checkCurrentEndDate = parkingInfoSpot[5]

            if (!checkIfDoesNotDatesCollide(startInfo, endInfo, checkCurrentStartDate, checkCurrentEndDate)) {
                canBeAdded = false
            }
            //seconds if the spot id has changed an then check if its avaible
            if (i != 0) {
                if ((currentSpotIDFirstCheck != currentSpotIDSecondCheck)) {

                    if (canBeAdded) {
                        currentSpotID = currentSpotIDSecondCheck
                        return true
                    }
                    //resets the value of can be added to
                    else canBeAdded = true
                    //return true
                }
            }
            currentSpotIDSecondCheck = currentSpotIDFirstCheck;
        }
    }
}



function checkIfDoesNotDatesCollide(startOfParking, EndOfNewParking, startToBeChecked, EndToBeChecked) {
    if ((startOfParking.getTime() > EndToBeChecked.getTime())) {
        return true
    }
    else return false
}

function addNewParkingDate() {
    let year = parseInt(parkingYear());
    let month = parseInt(parkingMonth());
    let day = parseInt(parkingDay(year, month));
    let hours = parseInt(parkingHour());
    let minutes = parseInt(parkingMinute());

    //         new Date(year, month, day, hours, minutes, seconds, milliseconds)
    newParking = new Date(year, month, day, hours, minutes, 0, 0)

    alert("Please enter when you wish parking to end")

    //takes the old imput to make sure it doesnt overwrite
    endTime = endOfParking(year, month, day, hours, minutes)
    let startAndEnd = [newParking, endTime]

    return startAndEnd;
}



function parkingYear() {
    let thisYear = new Date();
    thisYear = thisYear.getFullYear();
    let addYear;
    //Check that its either this or next year, due to it might be on new years eve. This makes it a limited time.
    while (!checkIfYearIsValid(addYear)) {
        let addYear = prompt("What Year");

        if (checkIfYearIsValid(addYear)) return addYear;
        else if (!checkIfYearIsValid(addYear)) {
            alert("Invalid year!\n Only valid years are " + thisYear + " and "
                + (thisYear + 1) + "! \n Try again.")
        }
    }
}

function checkIfYearIsValid(checkYear) {
    let thisYear = new Date();
    thisYear = thisYear.getFullYear();
    checkYear = parseInt(checkYear)
    if (checkYear < thisYear || checkYear > thisYear + 1 || isNaN(checkYear)) return false
    else return true
}

function parkingMonth() {
    let addMonth;
    while (!checkIfMonthIsValid(addMonth)) {
        addMonth = prompt("What month number?");
        if (!checkIfMonthIsValid(addMonth)) {
            alert("Invalid month!\n Only valid  numbers are from 1 up to 12! \n Try again!")
        }
        else if (checkIfMonthIsValid(addMonth)) return addMonth - 1
    }
}

function checkIfMonthIsValid(monthToCheck) {
    if (monthToCheck < 1 || monthToCheck > 12 || isNaN(monthToCheck)) { return false }
    else return true
}

function parkingDay(year, month) {
    let addDay;
    let numberOfDaysInMonth = new Date(year, month, 0).getDate();

    while (!checkIfDayIsValid(year, month, addDay)) {
        addDay = prompt("What Day number?");
        if (!checkIfDayIsValid(year, month, addDay)) {
            alert("Invalid day!\n Only valid  numbers are from 1 up to " +
                numberOfDaysInMonth + "! \n Only v Try again!");
        }
        else if (checkIfDayIsValid(year, month, addDay)) break;

    }
    return addDay;
}

function checkIfDayIsValid(year, month, dayToCheck) {
    let numberOfDaysInMonth = new Date(year, month, 0).getDate();
    if (dayToCheck < 1 || dayToCheck > numberOfDaysInMonth || isNaN(dayToCheck)) return false;
    else return true
}

function parkingHour() {
    let addHour;

    while (!checkIfHourIsValid(addHour)) {
        addHour = prompt("What hour?");

        if (!checkIfHourIsValid(addHour)) {
            alert("Invalid hour! \n Only valid  numbers are from 0 up to 23! \nTry again!")
        }
    }
    return addHour
}

function checkIfHourIsValid(addHour) {
    if (addHour > 23 || addHour < 0 || isNaN(addHour) || addHour == "") {
        return false;
    }
    else return true;
}

function parkingMinute() {
    let addMinute = "";

    while (!checkIfMinuteIsValid(addMinute)) {
        addMinute = prompt("What minute of the hour?");

        if (!checkIfMinuteIsValid(addMinute)) {
            alert("Invalid minute! \n Only valid minutes are from 0 up to 59 \n Try again!")
        }
    }
    return addMinute;
}

function checkIfMinuteIsValid(addMinute) {
    addMinute = parseInt(addMinute)
    if (addMinute === 0) return true

    if (addMinute > 59 || addMinute < 0 || isNaN(addMinute) || addMinute == "") {
        return false;
    }
    else return true;
}

//Checks if the it ends before the parking starts
function endOfParking(startYear, startMonth, startDay, startHours, startMinutes) {
    let year = parseInt(parkingYear());

    while (year < startYear) {
        alert("Parking cant end at a year that happend before the parking started. Try again.")
        year = parseInt(parkingYear());
    }
    let month = parseInt(parkingMonth());

    while (year === startYear && month < startMonth) {
        alert("Parking cant end at month that happend befor parking started. Try again")
        month = parseInt(parkingMonth());
    }
    let day = parseInt(parkingDay(year, month));

    while (year === startYear && month === startMonth && day < startDay) {
        alert("Parking cant end at a day before parking started. Try again")
        day = parseInt(parkingDay(year, month));
    }
    let hours = parseInt(parkingHour());

    while (year === startYear && month === startMonth && day === startDay && hours < startHours) {
        alert("Parking cant end at  time before the parking started. Try agfain");
        hours = parseInt(parkingHour());
    }
    let minutes = parseInt(parkingMinute());

    while (year === startYear && month === startMonth && day === startDay && hours === startHours && minutes < startMinutes) {
        alert("Parking cant end at  time before the parking started. Try agfain");
        hours = parseInt(parkingHour());
    }
    parkingEnding = new Date(year, month, day, hours, minutes, 0, 0)
    return parkingEnding;
}

//gets the house id by using loop
function getAdress(id) {
    for (const lines of parkingHouseReservationInfo) {
        if (lines[0] === id) return lines[1]
    }
}

//get the comapny  from id with loop
function getCompanyName(id) {
    for (const lines of parkingHouseReservationInfo) {
        if (lines[0] === id) return lines[3]
    }
}

//Checks if ID is on the shwon list 
function writeTargetId() {
    let targetId;
    while (!checkIdInShowList(targetId)) {
        targetId = prompt("Write the prefered parkinghouseId");
        targetId = parseInt(targetId)

        if (!checkIdInShowList(targetId)) alert("Targeted id not found in list, try again")
    }
    return targetId
}

function checkIdInShowList(id) {
    let shownInfoList = showInfoList;

    for (const ids of shownInfoList) {
        if (id === ids[0]) return true
    }
    return false
}

module.exports = {
    getAdress: getAdress,
    getCompanyName: getCompanyName,
    parkingYear: parkingYear,
    checkIfYearIsInvalid: checkIfYearIsValid,
    checkIfMonthIsValid: checkIfMonthIsValid,
    checkIfDayIsValid: checkIfDayIsValid,
    checkIfHourIsValid: checkIfHourIsValid,
    checkIfMinuteIsValid: checkIfMinuteIsValid,
    checkIdInShowList: checkIdInShowList
}
