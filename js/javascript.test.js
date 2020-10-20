const { test, expect } = require("@jest/globals");
const javascript = require("./javascript")

test("checks if it returns all location from targeted city", ()=> {
    expect(javascript.getCityLocations("Halden")).toEqual([
        ["BRA VEIEN 6a", "Halden", 45.32, 321.31],
        ["MaurStien 17", "Halden", 45.31, 321.35]
    ]);
});



