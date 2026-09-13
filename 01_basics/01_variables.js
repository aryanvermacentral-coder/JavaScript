const accountId = 144553
let accountEmail = "aryan@verma.com"
var accountPassword = "12345"
accountCity = "NY"
let accountState;

//accountId = 21 // constant cannot be changed later

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])