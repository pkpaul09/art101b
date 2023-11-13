// index.js - Turn pseudocode into comments
// Tic Tac Toe
// Author: Paul Kim
// Date:10/23/2023

//sortUserName - a function that takes user input and soerts the letters of their name
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array
    var name Array = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted +", nameSorted);
    //Note that I could have done the above lines as a single line:
    //  username.toLower() .split("").sort().join("")
    return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed your name:",
    sortUserName(), "</br>");
    