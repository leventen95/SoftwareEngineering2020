window.onload = startup;

var nearbyList = [];

var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]
//Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 

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
   // selectButton = document.addEventListener("click", getParkingHouseInfo);
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
            nearbyList.push(current);
        }
    }
    console.log("NEARBY: \n" + nearbyList);


    //return nearbyList;
    createNearbyList(nearbyList)
}


/*WE DECIDED TO WAIT WITH FIXING THIS
//get Nearby from GPS
function getNearby(lognitue,lattitude){
    for(let i = 0; i < parkingHouseList.length; i ++){
        let current  =parkingHouseList[i];
        //checks longitute and lattutde
        if(current[3] < lognitue +0.00005 && current[3] > lognitue -0.0005 &&
            current[4]< lattitude +0.0005 && current[4] >  lattitude-0.0006){
                nearbyList.push(current);
            }
    }
    createNearbyList(nearbyList)

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

    console.log(returnList.length);


    let city;
    let adress;
    let parkingId;
    //Might needd to change format of parkingHouseList so we can have adress street street number!
    //Creates a drop down list to select from
    //Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName
    // number of spots,  unike ID of parking house 

    for (let i = 0; i < returnList.length; i++) {
        adress = returnList[i][0]
        city = returnList[i][1];
        parkingHouseId = returnList[i][6]


        dropDownList = dropDownList + '<option value="'
            + parkingHouseId +'">' + adress + " " + city +
            '</option>';
    }



    HTMLDropDown.innerHTML = "<select name ='NearbySelector' id='parkingHouseListNearby'>"
        + dropDownList + "</select>" + " " + '<button type="button" id ="selectButton" onclick="getParkingHouseInfo()">Select</button>';
}


function getParkingHouseInfo(){
    let parkingHouseId = document.getElementById("parkingHouseListNearby");

    alert(parkingHouseId.value)
}

module.exports = {
    getCityLocations: getCityLocations

}



