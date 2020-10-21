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
    [1,1,"EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1,2,"EasyPark", "", "", 000000000, "NaN"],
    [1,3,"EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1,4,"EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1,5,"EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1,6,"EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

    [2,1,"NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [2,2,"NotSoEasyPark", "", "", 000000000, "NaN"],
    [2,3,"NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [2,4,"NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [2,5,"NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [2,6,"NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [3,1,"BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [3,2,"BadSpot", "", "", 000000000, "NaN"],
    [3,3,"BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [3,4,"BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [3,5,"BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [3,6,"BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [4,1,"HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [4,2,"HandiCapSpot", "", "", 000000000, "NaN"],
    [4,3,"HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time", 68516969, "Robbie_Rotten"],
    [4,4,"HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [4,5,"HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [4,6,"HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

    
]
//Current format on ParkingHosueReservationList [[]] = 
//parkinghosueId, parkingspotID, ownerCompanyUserName, date and time of begging of  reservation,, date time of ending of reservation bruker telefon nummer, brukersbrukernavn



function startup() {
    /*xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = readFile;
     xmlhttp. open("GET", "parkingHouses.csv", true);
     xmlhttp.send();
 
     getNearbyButton = document.getElementById("GetNearbyButton");
    // getNearbyButton.addEventListener("click", getLocation); //THE LOCATION SHOULD RUN getNearby(longittude, lattitude) CANCELLED /POSTPONED*/
    // WITH THE USER INFO AS PARAMETER


    getByCity = document.getElementById("searchCityButton");
    getByCity.addEventListener("click", getCityLocations);


    selectButton = document.getElementById("selectButton");
    //selectButton = document.addEventListener("click", getParkingHouseInfo);
}



//TO BE REMOVED AND REPLAYED WITH PHP SCRIPT!
/*
function readFile() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
        let response = xmlhttp.responseText;
        parkingHouseList = response.result.split("\n");


        for(let i = 0; i <parkingHouseList.length; i++){
            //Splits the parking house into a 2d array on comma
            parkingHouseList[i] = parkingHouseList[i].split(",")
        }


    }

}
*/

//Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 

//Searches for all parking houses in the city by name

function getCityLocations() {
    let city = document.getElementById("searchCityInput").value;



    for (let i = 0; i < parkingHouseList.length; i++) {
        let current = parkingHouseList[i];
        //checks if the city has the same name

        if (city.toLowerCase() === current[1].toLowerCase()) {
            nearByParkingList.push(current);
        }
    }
    console.log("NEARBY: \n" + nearByParkingList);


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



    if (returnList == null) {

        alert("No nearby parking places found");
        //Stopts the fucntion
        return;
    }

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
    if (selectedHouseId == "all"){
        alert("VALUE WAS all")
    
        console.log("SELECTED NEARBY" + nearByParkingList)

        if (nearByParkingList.length > 0) {
           

            for (let i = 0; i < nearByParkingList.length; i++) {

                for (let m = 0; m < parkingHouseReservationInfo.length; m++){

                    
                    if (
                        nearByParkingList[i][6]
                         == parkingHouseReservationInfo[m][0])
                      
                        showInfoList.push(parkingHouseReservationInfo[m])
                }
            }
        }
    }
    

    //loops tuor just one id 
    else{
        for (let m = 0; m < parkingHouseReservationInfo.length; m++){    
            if (
                selectedHouseId  == parkingHouseReservationInfo[m][0])
              
                showInfoList.push(parkingHouseReservationInfo[m])
        }
    }

    console.log("LENGHT IS \n" + showInfoList.length);

    for(let i = 0; i <showInfoList.length; i ++){
        console.log(showInfoList[i] +"\n")
    }

    //Hides user info for unecasry eyes
    for(let i = 0; i<showInfoList.length; i ++){
        showInfoList[i].pop()
        showInfoList[i].pop()
    }


    //SORTS BY SECOND COLLUM, THATS IS BY PARKINGSSPOT ID
    showInfoList = showInfoList.sort(function(a,b) {
        return a[1] - b[1];
    });

    //SORTS IT THEN BY FIRST COLLUM TO MAKE IT MORE READABLE
    showInfoList = showInfoList.sort(function(a,b) {
        return a[0] - b[0];
    });

    console.log("REMOVED INFO\n ")
    for(let i = 0; i <showInfoList.length; i ++){
        console.log(showInfoList[i] +"\n")
    }


    return showInfoLis;

}

module.exports = {
    getCityLocations: getCityLocations

}

//Currrent format on parkingHouseList [[]] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 

