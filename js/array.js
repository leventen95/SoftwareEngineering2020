window.onload = startup;



//Currrent format is [] = adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4],
    ["Edet 2", "Halden", 11.352130, 59.132880, "HaldenPark", 3, 6]
]

//Current format on ParkingHosueReservationList [[]] = 
//parkinghosueId[0], adress[1], parkingspotID[2], ownerCompanyUserName[3], date and time of begging of  reservation[4], date time of ending of reservation[5], user phone number[6], brukersbrukernavn[7]

var parkingHouseReservationInfo = [
    [1, "BRA VEIEN 6a Halden", 1, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 2, "EasyPark", "", "", 12345678, "NaN"],
    [1, "BRA VEIEN 6a Halden", 3, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 4, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 5, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 6, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

    [2, "MOSSE VEIEN 53b Fredrikstad", 1, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer )", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 2, "NotSoEasyPark", "", "", 12345678, "NaN"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 3, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 4, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 5, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 6, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [3, "Ant 23 Moss", 1, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [3, "Ant 23 Moss", 2, "BadSpot", "", "", 12345678, "NaN"],
    [3, "Ant 23 Moss", 3, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [3, "Ant 23 Moss", 4, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [3, "Ant 23 Moss", 5, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [3, "Ant 23 Moss", 6, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [4, "MaurStien 17 Halden", 1, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [4, "MaurStien 17 Halden", 2, "HandiCapSpot", "", "", 12345678, "NaN"],
    [4, "MaurStien 17 Halden", 3, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [4, "MaurStien 17 Halden", 4, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [4, "MaurStien 17 Halden", 5, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [4, "MaurStien 17 Halden", 6, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"]

]
