

const { expect, test } = require("@jest/globals");
const translatePigLatin = require("./script");

test("Matt will become attMay", function(){
    expect(translatePigLatin("Matt")).toBe("attMay");
})
test("table will become abletay", function(){
    expect(translatePigLatin("table")).toBe("abletay");
})
test("aaron will become arronway", function(){
    expect(translatePigLatin("aaron")).toBe("aaronway");
})

test("apple will become appleay", function(){
    expect(translatePigLatin("apple")).toBe("appleay");//expected fail
})

test("Apple will become Appleway", function(){
    expect(translatePigLatin("Apple")).toBe("Appleway");//fails but unsure why??
})
test("orange will become orangeway", function(){
    expect(translatePigLatin("orange")).toBe("orangeway");
})
test("ever will become everway", function(){
    expect(translatePigLatin("ever")).toBe("everway");
})
test("string will become ingstray", function(){
    expect(translatePigLatin("string")).toBe("ingstray");
})

test("state will become atestay", function(){
    expect(translatePigLatin("state")).toBe("atestay");
})