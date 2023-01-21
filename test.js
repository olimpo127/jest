let { fromEuroToDollar, sum, fromDollarToYen, fromYanToPound } = require('./app.js')
//import the function sum from the app.js file


// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    let expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Dollar to yen", function(){
    const yens = fromDollarToYen(2)
    let expected = 2 * 106.6;
    expect(yens).toBe(expected);
})

test("Yen to pound", function(){
    const pounds = fromYanToPound(2)
    let expected = 2 * 159.9;
    expect(pounds).toBe(expected);
})