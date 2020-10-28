const { test, expect } = require("@jest/globals");
const admin = require('./admin');








test("Checks if new array imput is valid, does not change array context", () => {
    expect(admin.newArray(
        "Jessheim24", "Voss", 232.32, 512.32, "EasyPark", 12, 5
    )).toEqual(["Jessheim24", "Voss", 232.32, 512.32, "EasyPark", 12, 5]);
})


test("Check if i wrote return array test correctly :O", () => {
    expect(admin.returnArray()).toEqual([
        ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
        ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
        ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
        ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
    ]);
});

// NB! YOU CAN ONLY RUN THE TEST THAT CHANGES THE ARRAY SEPERATLY FROM OTHERS THAT CHANGES ARRAY! 
/*
test("Check if adding a newhouse works", () => {
    expect(admin.addParkingHouse("Jessheim 24", "Voss", 232.32, 512.32, "EasyPark", 12, 5)).toEqual([
        ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6,1],
        ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark",17, 2],
        ["Ant 23", "Moss", 423.231, 62.132,"BadSpot", 5,3],
        ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16,4],
        ["Jessheim 24", "Voss", 232.32, 512.32, "EasyPark", 12, 5]
    ]);
});
*/



describe("Checks if they find target place tests",()=>{
//FIND PLACE!
test("Check if true find BRA VEIEN 6a, Halden", () => {
    expect(admin.findPlace("BRA VEIEN 6a", "Halden")).toBeTruthy();
});

test("Check if true find Ant 23, Moss", () => {
    expect(admin.findPlace("Ant 23", "Moss")).toBeTruthy();
});


test("Check if they  cant find target location", () => {
    expect(admin.findPlace("BRA 23EN 6a", "Sweden")).toBeFalsy();
});
})

//CHECK VALID ADRESS
describe('Check if valid adress tests', () => {
test("Check if ant 23 is valid adress ", () => {
    expect(admin.checkValidAdress("Ant 23")).toBeTruthy();
})

test("Check if BRA VEIEN 6a is valid adress ", () => {
    expect(admin.checkValidAdress("BRA VEIEN 6a")).toBeTruthy();
})

test("Check if MOSSE VEIEN 53b is valid adress ", () => {
    expect(admin.checkValidAdress("MOSSE VEIEN 53b")).toBeTruthy();
})

test("Check ifMaurStien 17 is valid adress ", () => {
    expect(admin.checkValidAdress("MaurStien 17")).toBeTruthy();
})

test("Check if johnny 35 is invalid adress ", () => {
    expect(admin.checkValidAdress("johnny 35")).toBeFalsy();
})
});


//Check valid city

describe('check valid city tests', () => {
test("Check if Halden is valid City", () => {
    expect(admin.checkValidCity("Halden")).toBeTruthy();
})
test("Check if Moss is valid City", () => {
    expect(admin.checkValidCity("Moss")).toBeTruthy();
})
test("Check if Fredikstad is valid City", () => {
    expect(admin.checkValidCity("Moss")).toBeTruthy();
})
test("Check if Tokyo is invalid City", () => {
    expect(admin.checkValidCity("Tokyo")).toBeFalsy();
})

test("check if target parking house is removed from list", () => {
    expect(admin.removeParkingHouse("BRA VEIEN 6a", "Halden")).toEqual([
        ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
        ["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
        ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
    ]);
})
})







/*------------------------UNIT TESTING ---------*/

/*var  parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6, 1],
["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark", 17, 2],
["Ant 23", "Moss", 423.231, 62.132, "BadSpot", 5, 3],
["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16, 4]
];*/

