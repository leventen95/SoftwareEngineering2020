window.onload = startup;

var nearByParkingList = [];



function startup() {
    getByCity = document.getElementById("searchCityButton");
    getByCity.addEventListener("click", getInputFromDocument);

}

function clearShowList() {
    showInfoList = []
}

function clearNearByParkingList() {
    nearByParkingList = []
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
        //ADD/REMOVE COMMENTS FOR THE LINES ABOVE AND UNDER
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

    else { status = checkIfIdExsist(parseInt(selectedHouseId)) }
    //Hides user info for unecasry eyes
    for (const eachLine of showInfoList) {
        eachLine.pop()
        eachLine.pop()
    }

    if (showInfoList[0] == null) { return status }

    else {

        createTable(showInfoList);
        //ADD/REMOVE COMMENTS
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

