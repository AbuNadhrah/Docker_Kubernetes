//prepare data
var rawData = [
	{
		name: "Activities",
		actualStart: Date.UTC(2018, 0, 25),
		actualEnd: Date.UTC(2018, 2, 14),
		children: []
	}
];

//Global array to hold the activities and their respective times
//This will then be pushed into the rawData JSON object for charting
var activityArr = [];

function ganttPRO_Click() {
	//Add to the json variable
	//To add, I'll use the activityArr, by looping through the length of the array.
	var i;
	for (i = 0; i <= activityArr.length - 1; i++) {
		rawData[0].children.push({"name": activityArr[i][0], "actualStart": activityArr[i][1], "actualEnd":  activityArr[i][2]});
	}

	//draw chart
	var treedata = anychart.data.tree(rawData, "as-tree");
	var chart = anychart.ganttProject();
	chart.data(treedata);
	chart.container("container");
	chart.draw();

	//show all items on screen
	chart.fitAll();

	//alert(rawData[0].children.length);
}

//This function will take the information from the textbox and date pickers and store in the activityArr array
function addActivity() {
	//declare some variables to hold activity, start and end date
	var ganttActivity = "";
	var sDate = new Date();
	var eDate = new Date();

	ganttActivity = document.getElementsByName("activity")[0].value;
	sDate = document.getElementsByName("startdate")[0].value;
	eDate = document.getElementsByName("enddate")[0].value;

	//populate the array
	activityArr.push([ganttActivity, sDate, eDate]);

	//Clear content of form elements
	document.getElementsByName("activity")[0].value = "";
	document.getElementsByName("startdate")[0].value = "";
	document.getElementsByName("enddate")[0].value = "";
}
