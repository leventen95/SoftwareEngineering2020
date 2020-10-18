//THIS SCRIPT IS CONNECTED TO admin.html






window.onload = startup;

//Currrent format is [] = adress, city, longititude, lattitude
var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 32131],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 32131],
    ["Ant 23", "Moss", 423.231, 62.132]
];


var xmlhttp;

function startup() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = readFile;
    xmlhttp.open("GET", "../parkingHouses.csv", true);
    xmlhttp.send();


    add = document.getElementById("addButton");
    remove = document.getElementById("removeButton");


    add.addEventListener("click", addParkingHouse);
    remove.addEventListener("click", removeParkingHouse);



}



function readFile() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let response = xmlhttp.responseText;

        parkingHouseList = response.result.split("\n");


        for (let i = 0; i < parkingHouseList.length; i++) {
            //Splits the parking house into a 2d array on comma
            parkingHouseList[i] = parkingHouseList[i].split(",")
        }


        console.log("Loadead parking HouseList complete: \n " + parkingHouseList);

    }

}


function addParkingHouse() {

    let newAdress = prompt("Please enter the new parkings house's  Adress");
    let newCity = prompt("Please enter the new parkings house's  City");
    let newLongtitude = prompt("Please enter the new parkings house's Longtitude");
    let newLatitude = prompt("Please enter the new parkings house's Latitude");

    let newParkingHouse = [newAdress, newCity, newLatitude, newLongtitude];


    console.log(newParkingHouse);

    parkingHouseList.push(newParkingHouse);

    //Eksempel, forbredet metode
    /*
    let numberOfComma = 0;
    let addInfo = document.getElementById("addInput").value;




        //Checks thru all of the inputs for commas
    for(let i = 0; i < addInfo.length; i ++){
        let currentCharacter = addInfo.charAt(i);

        if(currentCharacter == ","){
            numberOfComma ++;
        }
    }


        //Sjekker at at vi har minimums antall av komma og så legger vi til
    if(numberOfComma == 3){
       




        parkingHouseList.push(addInfo);

    }*/
    writeToCsv();

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

//Parking list i an 2darray with all parking locations
//Currrent format is [] = adress, city, longititude, lattitude

function removeParkingHouse(removeTargetAdress, removeTargetCity) {
    //removeTargetAdress = document.getElementById("removeAdress").value;
    //removeTargetCity = document.getElementById("removeInCity").value;
    let newParkingHouseList= [];
    for (let i = 0; i < parkingHouseList.length; i++) {


        if (removeTargetAdress === parkingHouseList[i][0]
            && removeTargetCity === parkingHouseList[i][1]) {
            //makes a new list without the one to be removed


            for(var m = 0; m <parkingHouseList.length; m++){
                if(!m === i){
                    newParkingHouseList.push(parkingHouseList[i])
                }
                

            }
          
            
            
                
            
            //writeToCsv();
            console.log(newParkingHouseList);
            return newParkingHouseList;

        }

        /*else if (i = parkingHouseList.length - i) {
            alert("No parking house on that adress");
        }*/
    }
}


/*
//Currrent format is [] = adress, city, longititude, lattitude
//var  parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 32131],
    ["MOSSE VEIEN 53b","Fredrikstad", 43.32, 32131]
    ];*/



function findPlace(targetAdress, targetCity) {

    for (let i = 0; i < parkingHouseList.length; i++) {


        if (targetAdress === parkingHouseList[i][0]
            && targetCity === parkingHouseList[i][1]) {

            return true;

        }

        
    }
}

function returnArray() {
    return parkingHouseList;
}


module.exports = {
    
    removeParkingHouse: removeParkingHouse,
    returnArray: returnArray,
    findPlace: findPlace
    
    
};