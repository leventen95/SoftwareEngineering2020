const { test, expect } = require("@jest/globals");
const admin = require('./admin');




test("Check if they find target location", ()=> {
    expect(admin.findPlace("BRA VEIEN 6a", "Halden")).toBeTruthy();
});

test("Check if they  cant find target location", ()=> {
    expect(admin.findPlace("BRA 23EN 6a", "Sweden")).toBeFalsy();
});





test("Checks if new array imput is valid, does not change array context", ()=>{
    expect(admin.newArray(
        "Jessheim24", "Voss", 232.32, 512.32, "EasyPark", 12, 5
        )).toEqual(["Jessheim24", "Voss", 232.32, 512.32, "EasyPark", 12, 5]);
    })
    
    
    test("Check if i wrote return array test correctly :O", () => {
        expect(admin.returnArray()).toEqual([
            ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6,1],
            ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark",17, 2],
            ["Ant 23", "Moss", 423.231, 62.132,"BadSpot", 5,3],
            ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16,4]
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

       
        
        test("checks if Newparkinghouselist had removed the desired house without the found one", () => {
            expect(admin.removeParkingHouse("BRA VEIEN 6a", "Halden")).toEqual([
                ["MOSSE VEIEN 53b", "Fredrikstad", 43.32, 321.31, "NotSoEasyPark",17, 2],
                ["Ant 23", "Moss", 423.231, 62.132,"BadSpot", 5,3],
                ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16,4]
            ]); 
        })
        
    
    
    
    /*var  parkingHouseList = [
        ["BRA VEIEN 6a", "Halden", 45.32, 32131],
        ["MOSSE VEIEN 53b","Fredrikstad", 43.32, 32131],
        ["Ant 23", "Moss", 423.231, 62.132]
    ];*/