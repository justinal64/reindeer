var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// I thought it would be cleaner to add this then to create an if statement to eliminate the invalid html colors in colors[]
var validColors = ["Blue", "Red", "Orange", "Purple", "Aquamarine", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"]

var hohohoElement = document.getElementById("coloredReindeer");


for (var i = 0; i < reindeer.length; i++) {
    // adding an id so I can change the color of the h3 tag through js
    hohohoElement.innerHTML +=  "<h3 id='h3_" + i + "'" + ">" + colors[i] + " " + reindeer[i] + "</h3>";
    // Adding color to each element (for fun no required)
    document.getElementById("h3_" + i).style.color = validColors[i];

}
