window.onload = startup;

var nearByParkingList = [];

//Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName, number of spots,  unike ID of parking house 
var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]



var parkingHouseReservationInfo = [
    [1, 1, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, 2, "EasyPark", "", "", 12345678, "NaN"],
    [1, 3, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, 4, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, 5, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, 6, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

    [2, 1, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [2, 2, "NotSoEasyPark", "", "", 12345678, "NaN"],
    [2, 3, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [2, 4, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [2, 5, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [2, 6, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [3, 1, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [3, 2, "BadSpot", "", "", 12345678, "NaN"],
    [3, 3, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [3, 4, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [3, 5, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [3, 6, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [4, 1, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [4, 2, "HandiCapSpot", "", "", 12345678, "NaN"],
    [4, 3, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time", 68516969, "Robbie_Rotten"],
    [4, 4, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [4, 5, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [4, 6, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


]
//Current format on ParkingHosueReservationList [[]] = 
//parkinghosueId, parkingspotID, ownerCompanyUserName, date and time of begging of  reservation,, date time of ending of reservation bruker telefon nummer, brukersbrukernavn



function startup() {
    


    getByCity = document.getElementById("searchCityButton");
    getByCity.addEventListener("click", getCityLocations);


    selectButton = document.getElementById("selectButton");
   
}



//Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 

//Searches for all parking houses in the city by name

function getCityLocations() {
    let city = document.getElementById("searchCityInput").value;
    let checkIfFound = false;


    for (let i = 0; i < parkingHouseList.length; i++) {
        let current = parkingHouseList[i];
        //checks if the city has the same name

        if (city.toLowerCase() === current[1].toLowerCase()) {
            nearByParkingList.push(current);
            checkIfFound = true;
        }
    }
    console.log("NEARBY: \n" + nearByParkingList);

    if(!checkIfFound){
        alert("No parking found nearby!")
        return; 
    }
    //return nearByParkingList;
    createNearbyList(nearByParkingList)
}



/*WE DECIDED TO WAIT WITH FIXING THIS
//get Nearby from GPS
function getNearby(lognitue,lattitude){
    for(let i = 0; i < parkingHouseList.length; i ++){
        let current  =parkingHouseList[i];
        //checks longitute and lattutde
        if(current[3] < lognitue +0.00005 && current[3] > lognitue -0.0005 &&
            current[4]< lattitude +0.0005 && current[4] >  lattitude-0.0006){
                nearByParkingList.push(current);
            }
    }
    createNearbyList(nearByParkingList)

}
*/


//NOT SURE IF I CAN TEST THIS
function createNearbyList(returnList) {


    //THis is where the list shoudl be in the HTML
    let HTMLDropDown = document.getElementById("DropDown");

    let dropDownList = '<option value="all">All</option>';


    let city;
    let adress;
    let parkingId;
    /*Might needd to change format of parkingHouseList so we can have adress street street number!
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



//CALLED BY ON CLICK BUTTON, IN HTML SCRIPT INJECTED!
function createParkingHouseInfo() {
    let selectedHouseId = document.getElementById("parkingHouseListNearby").value;
    let showInfoList = [[]];



    //Loops thru all ids and retures them if they match
    if (selectedHouseId == "all") {

        console.log("SELECTED NEARBY" + nearByParkingList)

        if (nearByParkingList.length > 0) {


            for (let i = 0; i < nearByParkingList.length; i++) {

                for (let m = 0; m < parkingHouseReservationInfo.length; m++) {


                    if (
                        nearByParkingList[i][6]
                        == parkingHouseReservationInfo[m][0])

                        showInfoList.push(parkingHouseReservationInfo[m])
                }
            }
        }
    }


    //loops tuor just one id 
    else {
        for (let m = 0; m < parkingHouseReservationInfo.length; m++) {
            if (
                selectedHouseId == parkingHouseReservationInfo[m][0])

                showInfoList.push(parkingHouseReservationInfo[m])
        }
    }

    console.log("LENGHT IS \n" + showInfoList.length);

    for (let i = 0; i < showInfoList.length; i++) {
        console.log(showInfoList[i] + "\n")
    }

    //Hides user info for unecasry eyes
    for (let i = 0; i < showInfoList.length; i++) {
        showInfoList[i].pop()
        showInfoList[i].pop()
    }


    //SORTS BY SECOND COLLUM, THATS IS BY PARKINGSSPOT ID
    showInfoList = showInfoList.sort(function (a, b) {
        return a[1] - b[1];
    });

    alert("VALUE WAS" + selectedHouseId)
    //SORTS IT THEN BY FIRST COLLUM TO MAKE IT MORE READABLE



    showInfoList = showInfoList.sort(function (a, b) {
        return a[0] - b[0];
    });

    console.log("REMOVED INFO\n ")
    for (let i = 0; i < showInfoList.length; i++) {
        console.log(showInfoList[i] + "\n")
    }

    createTable(showInfoList);
    return showInfoList;
    
}   


function createTable(parkingInfoList){
    let table ="";

    for(let i = 0; i <parkingInfoList.length; i++){
        currentLine= parkingInfoList[i];
        let addRow = currentLine.join("</td><td>");

        table += "<tr><td>" + addRow  + "</td></tr>";
    }

    let tableHeader = "<tr><th>ParkignHouseId</th><th>ParkingSpotId</th><th>Owner Company</th><th>Occupied from</th><th>Occupied to</th></tr>"

    HTMLtable= document.getElementById("tableList");
    HTMLtable.innerHTML= "<table border='1'>"+tableHeader +table +"</table>";


}

module.exports = {
    getCityLocations: getCityLocations

}

//Currrent format on parkingHouseList [[]] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 

