const accountId = 244711;
let accountEmail = "rawat.ankit006@gmail.com";
var accountPassword = "12345";
acccountCity = "delhi";
let acccountState;

// accountId = 6 // not allowed because assignment to constant variable not change 

accountEmail = "nishant00@gmail.com";
accountPassword = "54321";
acccountCity = "noida";

console.log(accountId);

/*
    Prefer not use to var
    because of issue in block scope and funcation
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  acccountCity,
  acccountState,
]);
