//[widget charts Javascript]

//Project:	Unique Admin - Responsive Admin Template
//Primary use:   Used only for the  widget charts



$( document ).ready(function() {
    "use strict";
	//Line Chart
	
	new Chart(document.getElementById("line-chart1"), {
	  type: 'line',
	  data: {
		labels: [4500,3500,3200,3050,2700,2450,2200,1750,1499,2050],
		datasets: [
			{
			data: [600,300,290,200,700,260,820,172,312,433],
			label: "Orders",
			borderColor: "#ff4500",
			fill: false
			},
			{
			data: [86,114,106,106,107,111,133,221,783,2478],
			label: "Profits",
			borderColor: "#689f38",
			fill: false
		  	},
			{
			data: [168,170,178,190,203,276,408,547,675,734],
			label: "Revenue",
			borderColor: "#389f99",
			fill: false
		  	},
			{
			data: [40,20,10,16,24,38,74,167,508,784],
			label: "Expenses",
			borderColor: "#ee1044",
			fill: false
		  	},
			{
			data: [6,3,2,2,7,26,82,172,312,433],
			label: "Shipping",
			borderColor: "#ff8f00",
			fill: false
		  	}
		]
	  },
	  options: {
		title: {
		  display: false,
		  text: 'My Dateset'
		}
	  }
	});

	
}); // End of use strict
