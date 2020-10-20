window.onload = startup;

var nearbyList = [];
var dropDownList;
var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31],
    ["Ant 23", "Moss", 423.231, 62.132],
    ["MaurStien 17", "Halden", 45.31, 321.35]
]

function startup(){

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = readFile;
    xmlhttp. open("GET", "parkingHouses.csv", true);
    xmlhttp.send();


    getNearbyButton = document.getElementById("GetNearbyButton");
   // getNearbyButton.addEventListener("click", getLocation); //THE LOCATION SHOULD RUN getNearby(longittude, lattitude) CANCELLED /POSTPONED
    // WITH THE USER INFO AS PARAMETER
    getByCity = document.getElementById("searchCityButton");
    getByCity.addEventListener("click", getCityLocations);
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

//Parking list i an 2darray with all parking locations
//Currrent format is [] = adress, city, longititude, lattitude



//Searches for all parking houses in the city by name

function getCityLocations(city){
   // let city = document.getElementById("searchCityInput").value;
    
    for(let i = 0; i < parkingHouseList.length; i ++){
        let current  =parkingHouseList[i];
        //checks longitute and lattutde
        if(city.toLowerCase()=== current[1].toLowerCase()){
        nearbyList.push(current);
        }
    }
    
    return nearbyList;
    //createNearbyList(nearbyList)
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
function createNearbyList(returnList){


    //THis is where the list shoudl be in the HTML
    let HTMLDropDown= document.getElementById("DropDown");



    if(returnList == null){

        alert("No nearby parking places found");
        //Stopts the fucntion
        return;
    }



    //Might needd to change format of parkingHouseList so we can have adress street street number!
    //Creates a drop down list to select from
    for(let i = 0; i <returnList; i++){

        let adress =returnList[i][1];
        
        dropDownList+= '<option value="' + adress +'">' + adress + '</option>';
    }

    HTMLDropDown.innerHTML = "<Select name ='NearbySelector' id='parkingNearby'" +dropDownList +"</select>"
    

}

module.exports = {
    getCityLocations : getCityLocations
};



