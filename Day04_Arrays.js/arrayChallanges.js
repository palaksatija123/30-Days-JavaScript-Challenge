/*
1)Declare an array names TeaFlavours that contain the strings 'greentea' , 'blacktea' and oolong tea
access the first element of an array and stored it in a variable named 'firsttea'..
*/

let TeaFlavours = ["greentea","blacktea","oolongtea"];

const firsttea = TeaFlavours[0];   //stored teaflavor at first in firsttea
console.log(firsttea);

/*
2)Declare an array named "cities" contaning "London","Tokya","Paris"and "NewYork".Access the third element in the array and stored it in a variable named "Favouritecity"
*/
let cities = ["London","Tokyo","Paris","NewYork"];
const Favouritecity = cities[2];
console.log(Favouritecity);


/*
3)you have an array named greenTea contaning HerbalTea,WhiteTea and masala chai .Change the second element of array to jasmine tea
*/

let greenTea = ["HerbalTea","Whitetea","MasalaChai"];
greenTea[1]="JasmineTea";
console.log(greenTea);

/*
4)Declare an array named 'citiesVisited' contaning "Mumbai" and "Sydney". 
Add "Berlin" to the array using the push method
*/

let citiesVisited = ["Mumbai","Sydney"];
console.log(citiesVisited.push("Berlin"));


/*5)You have an array named TeaOrders with "chai" , "icedTea" , "Matcha" , "earl grey".Remove the last element of the array using the pop method and stored it in the variable named "Lastorder"*/

let TeaOrders = ["chai","icedTea","Matcha","Earl Grey"];
const Lastorder = TeaOrders.pop()
console.log(TeaOrders);
console.log(Lastorder);










