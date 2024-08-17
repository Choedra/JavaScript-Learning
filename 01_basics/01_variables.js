const accountId = 144553;
let accountEmail = "Choedra@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; // undefined
// accountId = 2; // not allowed

accountEmail = "C@gmail.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
