const { test, expect } = require("@jest/globals");
const uregistretBruker = require("./uregistretBruker")

test("checks if it returns all location from targeted city", ()=> {
    expect(uregistretBruker.getCityLocations("Halden")).toEqual([
        ["BRA VEIEN 6a", "Halden", 45.32, 321.31, "EasyPark", 6,1],
        ["MaurStien 17", "Halden", 45.31, 321.35, "HandiCapSpot", 16,4]
    ]);
});

