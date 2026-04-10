/*6)You have an array named "popularTeas contaning "GreenTea","Oolong tea","chai"..
Create a soft copy of this array named 'SoftCopyTeas'
*/

let popularTeas = ["GreenTea","OolongTea","Chai"];
const SoftCopyTeas = popularTeas  //SoftCopy  (if we pop it changes to all)
popularTeas.pop();
console.log(SoftCopyTeas);
console.log(popularTeas);

/* 7)You have an array named topCities contaning "Berlin","Singapore","NewYork".Create a hardcopy of this array named 'HardCopyCities'...*/

let topCities = ["Berlin","Singapore","NewYork"]
//let HardCopyCities = [...topCities];    //HardCopy  (if we pop it changes to that particular thing)
let HardCopyCities = topCities.slice();
topCities.pop();
console.log(HardCopyCities);  //Berlin,Singapore,NewYork
console.log(topCities);       //Berlin,Singapore

/* 8)You have two arrays: 'europeanCities' contaning "Paris" and "Rome" and "asianCities" contaning " Tokya" and "Bangkok" 
Merge this array into new array named "worldCities*/

let EuropeanCities = ["Paris","Rome"]
let AsianCities = ["Tokyo","Bangok"]
const worldCities = EuropeanCities.concat(AsianCities);
console.log(worldCities);

/*9) You have an array named 'teaMenu' contaning "MasalaChai","OolongTea","GreenTea"and"earlTea"..
Find the length of the array and stored it in a variable named "menuLength"*/

let teaMenu = ["MasalaChai","OolongTea","GreenTea","EarlTea"]
let menuLength = console.log(teaMenu.length);


/* 10) You have an array named "CityBucketList" contaning "Kyoto" , "London" , "CapeTwon" and "Vancouver".
Chcek if "London" is in an array and store the result in the variable named  "isLondonInList" */

let CityBucketList = ["Kyoto" ,"London" , "CapeTown" , "Vancouver"]
let isLondonInList = CityBucketList.includes("London");
console.log(isLondonInList);







