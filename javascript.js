window.onload = startup;

var nearbyList = [];

var parkinglist = [[]]

function startup(){
getNearbyButton = document.getElementById("GetNearby");
getNearbyButton.addEventListener("click", getLocation); //THE LOCATION SHOULD RUN getNearby(longittude, lattitude) WITH THE USER INFO AS PARAMETER
getNearbyInCity = document.getElementById("GetNearbyInCity");
getNearbyButton.addEventListener("click", getCityLocation);

}

//Parking list i an 2darray with all parking locations
//Currrent format is [] = adress, city, longititude, lattitude



function getCityLocation(){
    let city = document.getElementById("search");
    for(let i = 0; i < parkinglist.lenght; i ++){
        let current  =parkinglist[i]
        //checks longitute and lattutde
        if(city.getValue == parkinglist[1])
        nearbyList.push(current);
    }
    
    getNearby(nearbyList);
}


function getNearby(lognitue,lattitude){
    for(let i = 0; i < parkinglist.lenght; i ++){
        let current  =parkinglist[i]
        //checks longitute and lattutde
        if(current[3] < lognitue +0.00005 && current[3] > lognitue -0.0005 &&
            current[4]< lattitude +0.0005 && current[4] >  lattitude-0.0006){
                nearbyList.push(current);
            }
    }
    getNearby(nearbyList);
}

function createNearbyList(returnList){
    let dropDownList;

    //THis is where the list shoudl be in the HTML
    let HTMLDropDown= document.getElementById("DropDown");



    if((returnList &&returnList.lenght) == 0){

        alert("No nearby parking places found");
        //Stopts the fucntion
        return;
    }



    //Might needd to change format of parkinglist so we can have adress street street number!
    //Creates a drop down list to select from
    for(let i = 0; i <returnList; i++){

        let adress =returnList[i][1]
        
        dropDownList+= '<option value="' + adress +'">' + adress + '</option>';
    }

    HTMLDropDown.innerHTML = "<Select name ='NearbySelector' id='parkingNearby'" +dropDownList +"</select>"
    

}



