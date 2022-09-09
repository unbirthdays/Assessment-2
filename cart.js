///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// Callback function using two parameters: sum (which is initialized as 0), and item (the current item in the array)
// The sum starts as 0 and gets updated to the sum + price of the current item until it finishes and returns the total summedPrice
const summedPrice = cart.reduce(function(sum, item) {
    return sum + item["price"];
}, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    taxTotal = cartTotal * tax;

    return cartTotal + taxTotal - couponValue;
}

console.log(calcFinalPrice(90, 10, 0.20)); // testing


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    ID (Number): Unique ID of the customer, used to identify the customer.
    Name (String): Name of the customer.
    Email (String): Email of the customer, so we can email them a receipt.
    Order (Array of Strings): All items ordered by the customer. Array of Strings because each item will be identified by its name
    Total (Number): Price of all the items ordered. Number because the summed price will be a number with decimals

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    id: 123456,
    name: "Sabrina Baccam",
    email: "sabrinabaccam@gmail.com",
    order: cart.map(function(item) {
        return item.name;
    }),
    total: summedPrice
};

console.log(customer);
