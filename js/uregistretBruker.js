window.onload = startup;

var nearByParkingList = [];


//Currrent format is [] = adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]


//Current format on ParkingHosueReservationList [[]] = 
//parkinghosueId[0], adress[1], parkingspotID[2], ownerCompanyUserName[3], date and time of begging of  reservation[4], date time of ending of reservation[5], user phone number[6], brukersbrukernavn[7]

var parkingHouseReservationInfo = [
    [1, "BRA VEIEN 6a Halden", 1, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 2, "EasyPark", "", "", 12345678, "NaN"],
    [1, "BRA VEIEN 6a Halden", 3, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 4, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 5, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 6, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

    [2, "MOSSE VEIEN 53b Fredrikstad", 1, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer )", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 2, "NotSoEasyPark", "", "", 12345678, "NaN"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 3, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 4, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 5, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 6, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [3, "Ant 23 Moss", 1, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [3, "Ant 23 Moss", 2, "BadSpot", "", "", 12345678, "NaN"],
    [3, "Ant 23 Moss", 3, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [3, "Ant 23 Moss", 4, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [3, "Ant 23 Moss", 5, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [3, "Ant 23 Moss", 6, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [4, "MaurStien 17 Halden", 1, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [4, "MaurStien 17 Halden", 2, "HandiCapSpot", "", "", 12345678, "NaN"],
    [4, "MaurStien 17 Halden", 3, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [4, "MaurStien 17 Halden", 4, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [4, "MaurStien 17 Halden", 5, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [4, "MaurStien 17 Halden", 6, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

]

function startup() {
    getByCity = document.getElementById("searchCityButton");
    getByCity.addEventListener("click", getCityLocations);
}


//Current format on ParkingHosueReservationList [[]] = 
//Currrent format is [] = adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 


//Searches for all parking houses in the city by name

function getCityLocations() {
    //ADD/REMOVE COMMENTS FOR THE LINES ABOVE AND UNDER ADD VARIABLE TO PARAMETER
    let city = document.getElementById("searchCityInput").value;
    let checkIfFound = false;

    if (findCityInList(city)) {


        checkIfFound = true;
    }

    if (checkIfFound) {

        createNearbyList(nearByParkingList)
        //ADD/REMOVE COMMENTS FOR THE LINES ABOVE AND UNDER
       // return nearByParkingList;
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


function clearNearByParkingList() {
    nearByParkingList = []

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

    for (let i = 0; i < returnList.length; i++) {
        adress = returnList[i][0]
        city = returnList[i][1];
        parkingId = returnList[i][6]

        dropDownList = dropDownList + '<option value="'
            + parkingId + '">' + adress + " " + city +
            '</option>';
    }


    HTMLDropDown.innerHTML = "<select name ='NearbySelector' id='parkingHouseListNearby'>"
        //onclick="getParkingHouseInfo()
        + dropDownList + "</select>" + " " + '<button type="button" id ="selectButton" onclick="createParkingHouseInfo()" ">Select</button>';
}

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


var showInfoList = [];

function clearShowList() {

    showInfoList = []
    

}



//CALLED BY ON CLICK BUTTON, IN HTML SCRIPT INJECTED!
function createParkingHouseInfo() {
    //ADD/REMOVE COMMENTS FOR THE LINES ABOVE AND UNDER ADD VARIABLE TO PARAMETER
    let selectedHouseId = document.getElementById("parkingHouseListNearby").value;

    let status = false;
    if (selectedHouseId === "all") {

        for (const lines of nearByParkingList) {
            //Loops thu all ids that we had in nearbyparking list, checks and ads them to show list
            status = checkIfIdExsist(lines[6])
        }
    }

    else { status = checkIfIdExsist(selectedHouseId) }
    //Hides user info for unecasry eyes
    for (const eachLine of showInfoList) {
        eachLine.pop()
        eachLine.pop()
    }

    if (showInfoList[0] == null) { return status }

    else {
        
        createTable(showInfoList);
        //ADD/REMOVE //
        //return showInfoList;
    }

}


function createTable(parkingInfoList) {

    sortShowList();
    let table = "";

    for (let i = 0; i < parkingInfoList.length; i++) {
        currentLine = parkingInfoList[i];
        let addRow = currentLine.join("</td><td>");

        table += "<tr><td>" + addRow + "</td></tr>";
    }

    let tableHeader = "<tr><th>ParkignHouseId</th><th>Adress</th><th>ParkingSpotId</th><th>Owner Company</th><th>Occupied from</th><th>Occupied to</th></tr>"

    HTMLtable = document.getElementById("tableList");
    HTMLtable.innerHTML = "<table border='1'>" + tableHeader + table + "</table>";


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

module.exports = {
    getCityLocations: getCityLocations,
    clearNearByParkingList: clearNearByParkingList,
    findCityInList: findCityInList,
    createParkingHouseInfo: createParkingHouseInfo,
    checkIfIdExsist: checkIfIdExsist,
    clearShowList: clearShowList,


}

//Currrent format on parkingHouseList [[]] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 

