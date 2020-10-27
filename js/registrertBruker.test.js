const { test, expect } = require("@jest/globals");
const registrerBruker = require("./registrertBruker");

test("check if we get the adress from the parking list", ()=> {
    expect(registrerBruker.getAdress(1)).toEqual("BRA VEIEN 6a Halden")
})




test("Check if we get company name", ()=> {
    expect(registrerBruker.getCompanyName(1)).toEqual("EasyPark");

})
/*var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]
var nearByParkingList = [];

var user = [42066669, "Kim_Jong_Trump"]
var checkIdInThisList;

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
 */