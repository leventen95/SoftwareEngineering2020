//THIS SCRIPT IS CONNECTED TO admin.html






window.onload = startup;

//Currrent format on Parking House List[] =
// adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 

var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]

//parkinghosueId[0], adress[1], parkingspotID[2], ownerCompanyUserName[3], date and time of begging of  reservation[4], date time of ending of reservation[5], user phone number[6], brukersbrukernavn[7]
var parkingHouseReservationInfo = [
    [1, "BRA VEIEN 6a Halden", 1, "EasyPark", new Date("Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)"), new Date("Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"), 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 2, "EasyPark", new Date(""), new Date(""), 12345678, "NaN"],
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
    add = document.getElementById("addButton");
    remove = document.getElementById("removeButton");

    add.addEventListener("click", getNewHouseInfo);
    remove.addEventListener("click", getRemoveInfo);
}


// adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
// number of spots,  unike ID of parking house 

function getNewHouseInfo() {
    let newAdress = prompt("Please enter the new parkings house's  Adress");
    let newCity = prompt("Please enter the new parkings house's  City");
    let newLongtitude = prompt("Please enter the new parkings house's Longtitude");
    let newLatitude = prompt("Please enter the new parkings house's Latitude");
    let companyNayUserName=prompt("Please enter the new parkings house's CompanysUSerName");
    let numberOfSpots=prompt("Please enter the new parkings house's numberofSpots");
    let houseId = parkingHouseList.length +1

    addParkingHouse(newAdress, newCity, newLatitude, newLongtitude, companyNayUserName, numberOfSpots, houseId)
}
//newAdress, newCity, newLatitude, newLongtitude
function addParkingHouse(newAdress, newCity, newLatitude, newLongtitude, companyNayUserName, numberOfSpots, houseId)
{
    let newParkingHouse = [newAdress, newCity, newLatitude, newLongtitude, companyNayUserName, numberOfSpots, houseId];    
    parkingHouseList.push(newParkingHouse)
    console.log("NEW! :" + parkingHouseList)
    return parkingHouseList;

}



// adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
// number of spots,  unike ID of parking house 



function getRemoveInfo() {
    removeTargetAdress = document.getElementById("adressInput").value;
    removeTargetCity = document.getElementById("removeInCity").value;
    removeParkingHouse(removeTargetAdress, removeTargetCity)
}

//Removes the target house with adress and city 
function removeParkingHouse(removeTargetAdress, removeTargetCity) {
    if (findPlace(removeTargetAdress, removeTargetCity)) {
        let idOfRemoved = parseInt(getId(removeTargetAdress, removeTargetCity))

        //Honesthly no idea but it works. I kinda know but confused 
        for (let i = 0; i < parkingHouseList.length; i++) {
            if (idOfRemoved === parkingHouseList[i][6]) {
                let cloneArray = parkingHouseList.slice();
                parkingHouseList.splice(i, 1);
            }
        }
        //removes the extra arry created
        removeAllSpotsOfHous(idOfRemoved)

        return parkingHouseList;

    }

    else if (!findPlace(removeTargetAdress, removeTargetCity)) {
        alert("No parking house on that adress");
    }

}

// adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
function getId(houseRemoveAdress, houseRemoveCity) {
    for (const places of parkingHouseList) {
        curentHousadress = places[0]
        curretnHouseCity = places[1]

        if (houseRemoveAdress === curentHousadress && houseRemoveCity === curretnHouseCity) return places[6]
    }
}

/*
function removeAllSpotsOfHous(id) {
    for (let i = 0; i > parkingHouseReservationInfo.length; i++) {
        let currentIdOfHouse = parkingHouseReservationInfo[i][o];

        if (currentIdOfHouse === id) {

            let cloneArray = parkingHouseList.slice();
            parkingHouseReservationInfo.splice(i, 1);
            i--
        }
    }
}*/


function findPlace(targetAdress, targetCity) {

    if (checkValidAdress(targetAdress)
        && checkValidCity(targetCity)) {
        return true;
    }
}

//Currrent format on Parking House List[] =
// adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
function checkValidAdress(adressToCheck) {

    for (const adresses of parkingHouseList) {
        if (adresses[0] === adressToCheck) return true
    }

    return false;
}



function checkValidCity(cityToCheck) {
    for (const cities of parkingHouseList) {
        if (cityToCheck === cities[1]) return true
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