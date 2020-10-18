const { test, expect } = require("@jest/globals");
const admin = require('./admin');




test("Check if they find target location", ()=> {
    expect(admin.findPlace("BRA VEIEN 6a", "Halden")).toBeTruthy();
});

test("Check if they  cant find target location", ()=> {
    expect(admin.findPlace("BRA 23EN 6a", "Sweden")).toBeFalsy();
});




/* NP! Will overwrite the memory of parking space list!

test("checks if Newparkinghouselist is without the found one", () => {
    expect(admin.removeParkingHouse("BRA VEIEN 6a", "Halden")).toEqual([
        ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31],
        ["Ant 23", "Moss", 423.231, 62.132]
    ]);
    
});*/

test("Checks if new array imput is valid", ()=>{
    expect(admin.newArray(
        "Jessheim24", "Voss", 232.32, 512.32
        )).toEqual(["Jessheim24", "Voss", 232.32, 512.32]);
    })
    
    /*
    test("Check if i wrote return array test correctly :O", () => {
        expect(admin.returnArray()).toEqual([
            ["BRA VEIEN 6a", "Halden", 45.32, 321.31],
            ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31],
            ["Ant 23", "Moss", 423.231, 62.132]
        ]);
    });
    */
    
    test("Check if i newhouse works", () => {
        expect(admin.addParkingHouse("Jessheim 24", "Voss", 232.32, 512.32)).toEqual([
            ["BRA VEIEN 6a", "Halden", 45.32, 321.31],
            ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31],
            ["Ant 23", "Moss", 423.231, 62.132],
            ["Jessheim 24", "Voss", 232.32, 512.32]
        ]);
        
    });
    
    
    
    /*var  parkingHouseList = [
        ["BRA VEIEN 6a", "Halden", 45.32, 32131],
        ["MOSSE VEIEN 53b","Fredrikstad", 43.32, 32131],
        ["Ant 23", "Moss", 423.231, 62.132]
    ];*/