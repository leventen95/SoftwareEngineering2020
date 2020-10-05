window.onload = startup;

var nearbyList = [];

var parkinglist = [[]]

function startup(){
getNearbyButton = document.getElementById("GetNearby");
getNearbyButton.addEventListener("click", getLocation); //THE LOCATION SHOULD RUN getNearby(longittude, lattitude) WITH THE USER INFO AS PARAMETER

}

//Parking list i an 2darray with all parking locations
//Currrent format is [] = name, city, longititude, lattitude


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

    if((returnList &&returnList.lenght) == 0){

        alert("No nearby parking places found");
        //Stopts the fucntion
        return;
    }


    for(let i = 0; i <returnList; i++){




    }
 

}


}
