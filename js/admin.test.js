const { test, expect } = require("@jest/globals");
const admin = require('./admin');




test("Find Halden in list", ()=>{
    expect(admin.findCity("Halden")).toBeTruthy();
});

test("Check if i wrote return array test correctly",()=>{
    expect(admin.returnArray()).toEqual([
        ["BRA VEIEN 6a", "Halden", 45.32, 32131],
        ["MOSSE VEIEN 53b","Fredrikstad", 43.32, 32131],
        ["Ant 23", "Moss", 423.231, 62.132]
        ]);
});





test("checks if parkinghouselist is shortened", ()=>{
    expect(admin.removeParkingHouse("BRA VEIEN 6a", "Halden")).toEqual(
        expect[["MOSSE VEIEN 53b","Fredrikstad", 43.32, 32131],
        ["Ant 23", "Moss", 423.231, 62.132]]);
    
});
/*var  parkingHouseList = [
    ["BRA VEIEN 6a", "Halden", 45.32, 32131],
    ["MOSSE VEIEN 53b","Fredrikstad", 43.32, 32131],
    ["Ant 23", "Moss", 423.231, 62.132]
    ];*/