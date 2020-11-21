const { test, expect } = require("@jest/globals");
const { clearNearByParkingList, getCityLocations, clearShowList } = require("./uregistretBruker");
const uregistretBruker = require("./uregistretBruker")





//Currrent format is [] = adress[0], city[1], longititude[2], lattitude[3], ownerCompanyUserName[4], number of spots[5],  unike ID of parking house[6] 
/*var parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
    ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
    ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
    ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
]
*/

//Current format on ParkingHosueReservationList [[]] = 
//parkinghosueId[0], adress[1], parkingspotID[2], ownerCompanyUserName[3], date and time of begging of  reservation[4], date time of ending of reservation[5], user phone number[6], brukersbrukernavn[7]
/*
var parkingHouseReservationInfo = [
    [1, "BRA VEIEN 6a Halden", 1, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 2, "EasyPark", "", "", 12345678, "NaN"],
    [1, "BRA VEIEN 6a Halden", 3, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 4, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 5, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [1, "BRA VEIEN 6a Halden", 6, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

    [2, "MOSSE VEIEN 53b Fredrikstad", 1, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 2, "NotSoEasyPark", "", "", 12345678, "NaN"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 3, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 4, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 5, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [2, "MOSSE VEIEN 53b Fredrikstad", 6, "NotSoEasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [3, "Ant 23 Moss", 1, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [3, "Ant 23 Moss", 2, "BadSpot", "", "", 12345678, "NaN"],
    [3, "Ant 23 Moss", 3, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [3, "Ant 23 Moss", 4, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [3, "Ant 23 Moss", 5, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [3, "Ant 23 Moss", 6, "BadSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],


    [4, "MaurStien 17 Halden", 1, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Speedy_Gonzales"],
    [4, "MaurStien 17 Halden", 2, "HandiCapSpot", "", "", 12345678, "NaN"],
    [4, "MaurStien 17 Halden", 3, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 68516969, "Robbie_Rotten"],
    [4, "MaurStien 17 Halden", 4, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 23401669, "Hipster_Jesus"],
    [4, "MaurStien 17 Halden", 5, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],
    [4, "MaurStien 17 Halden", 6, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)", 42016969, "Slowpoke_Rodriguez"],

]*/

describe("Checks if they find target place tests. NB! Can only test one at a time!", () => {
    afterEach(() => {
        clearNearByParkingList();
    });
    test("checks if we find parking in Halden", () => {
        expect(uregistretBruker.getCityLocations("Halden")).toEqual([
            ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
            ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
        ]);
    });
    test("checks if we find parking in Fredrikstad", () => {
        expect(uregistretBruker.getCityLocations("Fredrikstad")).toEqual([
            ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2]

        ]);
    });

    test("checks if we find parking in moss", () => {
        expect(uregistretBruker.getCityLocations("Moss")).toEqual([
            ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3]
        ]);
    });
    test("Check if invalid city returns false", () => {
        expect(uregistretBruker.getCityLocations("FakeLocation")).toBeFalsy()
    })

});


afterEach(() => {
    clearShowList();
});

describe("checks if correct info are created in parkinghousetable in city halden, valid IDS are 1 and 4", () => {
    beforeAll(() => {
        clearNearByParkingList();
        getCityLocations("Halden");
    });
    

    test("check if parking house 1 returns deisred arrayy", () => {
        expect(uregistretBruker.createParkingHouseInfo(1)).toEqual([
            [1, "BRA VEIEN 6a Halden", 1, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 2, "EasyPark", "", ""],
            [1, "BRA VEIEN 6a Halden", 3, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 4, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 5, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 6, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"]
        ])
    })


    test("Check if parking house 2 returns teh desired array", () => {
        expect(uregistretBruker.createParkingHouseInfo(4)).toEqual([
            [4, "MaurStien 17 Halden", 1, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 2, "HandiCapSpot", "", ""],            
            [4, "MaurStien 17 Halden", 3, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 4, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 5, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 6, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"]
        ])
    })

    test("check if all is returns wished array", () => {
        expect(uregistretBruker.createParkingHouseInfo("all")).toEqual([
            [1, "BRA VEIEN 6a Halden", 1, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 2, "EasyPark", "", ""],
            [1, "BRA VEIEN 6a Halden", 3, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 4, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 5, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [1, "BRA VEIEN 6a Halden", 6, "EasyPark", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 1, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 2, "HandiCapSpot", "", ""],
            [4, "MaurStien 17 Halden", 3, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 4, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 5, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"],
            [4, "MaurStien 17 Halden", 6, "HandiCapSpot", "Wed Oct 21 2020 03:34:08 GMT+0200 (Central European Summer Time)", "Wed Oct 22 2020 03:34:08 GMT+0200 (Central European Summer Time)"]

        ])
    })


    
        

    test("Check if invalid location is false", () => {
        expect(uregistretBruker.createParkingHouseInfo("beebeeLilleLam")).toBeFalsy()
    })


})




//----------UNIT TESTING---------
describe("FInd city in list checks", () => {
    test("Halden to be true", () => {
        expect(uregistretBruker.findCityInList("Halden")).toBeTruthy();
    })
    test("Moss to be true", () => {
        expect(uregistretBruker.findCityInList("Moss")).toBeTruthy();
    })
    test("Fredrikstad to be true", () => {
        expect(uregistretBruker.findCityInList("Halden")).toBeTruthy();
    })


    test("YallaTown to be false", () => {
        expect(uregistretBruker.findCityInList("YallaTown")).toBeFalsy();
    })
})


describe("Check if idexsists group", () => {
    test("Check if id 1  is true", () => {
        expect(uregistretBruker.checkIfIdExsist(1)).toBeTruthy()
    })
    test("Check if id 2  is true", () => {
        expect(uregistretBruker.checkIfIdExsist(2)).toBeTruthy()
    })
    test("Check if id 3  is true", () => {
        expect(uregistretBruker.checkIfIdExsist(3)).toBeTruthy()
    })
    test("Check if id 4  is true", () => {
        expect(uregistretBruker.checkIfIdExsist(4)).toBeTruthy()
    })
    test("Check if id 5  is false", () => {
        expect(uregistretBruker.checkIfIdExsist(5)).toBeFalsy()
    })
})

window.alert = jest.fn();


//Stop error from alert
test("login api resolves true", () => {
    window.alert.mockClear();
    /* ... */
})