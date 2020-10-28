//THIS SCRIPT IS CONNECTED TO admin.html






window.onload = startup;

//Currrent format is [] = adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 

var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]



var xmlhttp;

function startup() {
    add = document.getElementById("addButton");
    remove = document.getElementById("removeButton");

    add.addEventListener("click", addParkingHouse);
    remove.addEventListener("click", removeParkingHouse);
}


//Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 
function addParkingHouse(newAdress, newCity, newLatitude, newLongtitude, companyNayUserName, numberOfSpots, houseId)
//newAdress, newCity, newLatitude, newLongtitude
{
    /*
    let newAdress = prompt("Please enter the new parkings house's  Adress");
    let newCity = prompt("Please enter the new parkings house's  City");
    let newLongtitude = prompt("Please enter the new parkings house's Longtitude");
    let newLatitude = prompt("Please enter the new parkings house's Latitude");
    */
    let newParkingHouseCheck = [newAdress, newCity, newLatitude, newLongtitude, companyNayUserName, numberOfSpots, houseId];



    //parkingHouseList[parkingHouseList.length]=newParkingHouseCheck;
    m

    parkingHouseList.splice(parkingHouseList.length, 0, newParkingHouseCheck)

    // writeToCsv();


    console.log("NEW! :" + parkingHouseList)
    return parkingHouseList;

}


function writeToCsv() {
    let csvRows = [];



    for (let i = 0; i < parkingHouseList.length; i++) {
        csvRows[i] = parkingHouseList[i].valueOf();
    }

    let dataToCsv = csvRows[0];

    for (let i = 1; i < csvRows.length; i++) {


        //adds a new line as long as it isnt last one
        if (i === csvRows.length - 1) {
            dataToCsv = dataToCsv + "\n" + csvRows[i];
        }
        else {
            dataToCsv = dataToCsv + csvRows[i];
        }
    }
}


//Currrent format is [] = adress, city, longititude, lattitude, ownerCompanyUserName
// number of spots,  unike ID of parking house 


//Removes the target house with adress and city 
function removeParkingHouse(removeTargetAdress, removeTargetCity) {
    //removeTargetAdress = document.getElementById("removeAdress").value;
    //removeTargetCity = document.getElementById("removeInCity").value;

    for (let i = 0; i < parkingHouseList.length; i++) {


        if (findPlace(removeTargetAdress, removeTargetCity)) {


            //Honesthly no idea but it works. I kinda know but confused 
            let cloneArray = parkingHouseList.slice();
            parkingHouseList.splice(i, 1);
            //removes the extra arry created


            //writeToCsv();

            return parkingHouseList;

        }

        else if (!findPlace(removeTargetAdress, removeTargetCity)) {
            alert("No parking house on that adress");
        }
    }
}



function findPlace(targetAdress, targetCity) {

    if (checkValidAdress(targetAdress)
        && checkValidCity(targetCity)) {
        return true;
    }

    else {
        return false
    }

}

//Currrent format is [] =
// adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
function checkValidAdress(adressToCheck) {

    for (let i = 0; i < parkingHouseList.length; i++) {
        currentAdressInList = parkingHouseList[i][0]
        if (currentAdressInList === adressToCheck) {
            return true;
        }
    }

    return false;
}

function checkBra(adressToCheck) {

    for (let i = 0; i < parkingHouseList.length; i++) {
        if( adressToCheck === parkingHouseList[i][0]) {
            return true;
        }
    }
    return false;

}

function checkValidCity(cityToCheck) {
    for (let i = 0; i < parkingHouseList.length; i++) {
        let currentCityInList = parkingHouseList[i][1]

        if (cityToCheck === currentCityInList) {
            return true;
        }
    }

    return false;
}


function newArray(newAdress, newCity, newLatitude, newLongtitude, companyNayUserName, numberOfSpots, houseId) {
    let newParkingHouseCheck = [newAdress, newCity, newLatitude, newLongtitude, companyNayUserName, numberOfSpots, houseId];
    return newParkingHouseCheck;
}

function returnArray() {
    return parkingHouseList;
}


module.exports = {

    removeParkingHouse: removeParkingHouse,
    returnArray: returnArray,
    findPlace: findPlace,
    addParkingHouse: addParkingHouse,
    newArray: newArray,
    checkValidAdress: checkValidAdress,
    checkValidCity: checkValidCity,
    
};