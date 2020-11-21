window.onload = go;

var earlyDate =new Date("Fri Nov 13 2020 04:01:30 GMT+0100 (Central European Standard Time)")
var lateDate= new Date("Fri Nov 14 2020 04:01:30 GMT+0100 (Central European Standard Time)")
/*
function go() {
    import { parkingHouseList, parkingHouseReservationInfo } from './arrays.js';

    console.log(parkingHouseList)
    console.log(parkingHouseReservationInfo)
}
*/

function go(){
    earlytime= parseInt(earlyDate.getTime());
    lateTime = parseInt(lateDate.getTime())

    console.log(typeof(earlyDate))
    if(lateTime < earlytime){
        alert("YES")
    }
}