var lorem="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, purus nam, auctor maecenas mus vitae a aliquet, dictumst eget, molestie in et magna, convallis non. At pede aliquet <br>interdum cras, sed volutpat enim pede amet, quisque donec mus mauris arcu, eu tempus, wisi ut cursus neque rhoncus in. Nulla dui <br>lorem semper ante. Purus amet porta elit id, nibh fusce, semper eget commodo suspendisse, mauris leo nec sed sem potenti. Vel mi, egestas blandit <br>pellentesque varius ante. Sed morbi et metus est nunc aliquam, eget orci tempus cum convallis quis. Neque adipiscing class et donec magna velit, <br>feugiat sem amet quam ac ac aut, augue viverra morbi consectetuer. Sit laborum sed sed, sapien integer sit, urna praesent, a libero nec vitae <br>laoreet mauris. Est aliquam, morbi tortor wisi tellus amet, ea amet accumsan lobortis cras mi, dui congue dolor semper sed at ipsum, velit tortor <br>donec adipiscing justo. Aliquet dolor faucibus id. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Parturient sed, cras elit libero, ultricies ut sed mollis, venenatis magna ac platea tincidunt posuere a. Quam excepturi vel hendrerit,<br> quis mi cras vivamus, nec quam mauris libero vel odio, luctus proin dui penatibus enim pede suspendisse, <br>vitae ante ut. Tellus pulvinar sollicitudin dapibus. Officiis elementum ipsum tincidunt facilisis, vel odio, id integer leo. Nulla pulvinar neque <br>vel, libero scelerisque, nibh integer tincidunt per, orci quis tempor arcu, cras suspendisse nam donec. Dui ultrices sed wisi quam erat lacus. <br>Aenean dui bibendum, quis felis sit vel, eros dui nec, eget pretium non ac. Tellus gravida, quis porta ut nulla at vel, quis donec id, nunc <br>curabitur ullamcorper lectus eu consequat, integer at accumsan mi. In aliquam fusce, erat porta in in risus et, erat id adipiscing inceptos <br>adipiscing velit, in arcu nec sem wisi. Nec laoreet erat, ut suscipit proin arcu feugiat ante, non sit placerat. Suscipit a ipsum, taciti justo <br>ante dui, habitant mauris, non ut nibh ipsum curabitur, sollicitudin neque nascetur fermentum dignissim. <br>Augue wisi arcu nulla. Sed et tortor <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vitae, pretium dui tempor amet ullamcorper amet euismod, in massa congue urna fusce, quis cubilia ultrices lobortis, felis fusce. Platea rutrum <br> pulvinar a, interdum non quam suspendisse neque, per amet fringilla sem magna litora. Quis lacus nulla nec consectetuer sapien lectus, congue donec. <br>Malesuada elit mi placerat magna turpis. Praesent scelerisque quis pretium sociis, fusce luctus. Similique ultricies faucibus feugiat, pede duis, <br>venenatis magna. Vestibulum dignissim nulla suscipit ac ullamcorper. Vestibulum voluptatem ligula, ac integer feugiat, lectus at magna, dolore <br>pretium molestie pulvinar. Erat a proin. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Luctus ac in, elit esse, ipsam sed mollis phasellus dictum. Nec vitae. Cras purus praesent porttitor a dolor natoque, urna amet velit sed <br>adipiscing. Sit arcu metus magna, viverra dolor, fames iaculis praesent congue sagittis. Pulvinar dis purus <br>lobortis mauris lectus, nulla rutrum volutpat tempor ut quam interdum, senectus ultrices vestibulum massa, aliquam ridiculus et vitae pede dui <br>vestibulum, eu possimus ante ac. Nec lacus mi ut ullamcorper consectetuer, mattis faucibus, nec quis ea quisque sed hendrerit. Ipsam eu feugiat <br>ipsum, ligula nulla, metus mollis faucibus lacinia, ligula commodo lobortis in, rem sed quis dignissim rutrum mi dapibus. Leo etiam, dui metus <br>placerat faucibus ut, potenti arcu ultricies, tempus donec et iaculis, platea justo amet habitant. Egestas tincidunt, aliquet facilisi porttitor <br>dignissim magnis.";
var error="Command Not Found"
var one, two, three, four, five
var record=[];
var spending=[23143,35462,345,3456,1345];
var earning=[3456,1435,5637,1234,5462];
function main (item) {
	var items=item.split(" ");
	var feed;
	var cmds=["del","object","array","string","gmanage","amanage","help","view","clear","lorem","weather","refresh","alias","history","em","emc","emd","eml","emp","emdm","hierarchy","theme"];
	if(cmds.indexOf(items[0])>-1){
		feed=items[0];
	}
	arryr=items;
	switch (feed) {
		case "del":
			one=arryr[1];
			del(one);
			break;
		case "clear":
			clear();
			break;
		case "gmanage":
			one=arryr[1];
			two=arryr[2];
			three=arryr[3];
			four=arryr[4];
			gmanage(one,two,three,four);
			break;
		case "amanage":
			one=arryr[1];
			two=arryr[2];
			three=arryr[3];
			four=arryr[4];
			amanage(one,two,three,four);
			break;
		case "help":
			help();
			break;
		case "view":
			view();
			break;
		case "object":
			one=arryr[1];
			two=arryr[2];
			three=arryr.slice(3);
			three=three.join(" ");
			oc(one,two,three);
			break;
		case "array":
			one=arryr[1];
			two=arryr.slice(2);
			two=two.join(" ");
			ac(one,two);
			break;
		case "string":
			one=arryr[1];
			two=arryr.slice(2);
			two=two.join(" ");
			sc(one,two);
			break;
		case "lorem":
			loremF();
			break;
		case "weather":
			weather();
			break;
		case "refresh":
			ref();
			break;
		case "clear":
			clear();
			break;
		case "alias":
			one=arryr[1];
			two=arryr[2];
			alias(one,two);
			break;
		case "history":
			history();
			break;
		case "em":
			em();
			break;
		case "eml":
			eml();
			break;
		case "emc":
			one=arryr[1];
			emc(one);
			break;
		case "emd":
			one=arryr[1];
			emd(one);
			break;
		case "emp":
			one=arryr[1];
			emp(one);
			break;
		case "emdm":
			one=arryr[1];
			emdm(one);
			break;
		case "hierarchy":
			hierarchy();
			break;
		case "theme":
			one=arryr[1];
			theme(one);
			break;
		default:
			$("#targetDiv").prepend('<pre>'+error+'</pre>');
			break;
	}
};
function del (folder) {
	var folders=folder;
	if(computer[folders]){
		delete computer[folder];
	}else{
		$("#targetDiv").prepend("<pre>Folder Not Found</pre>");
		console.error("Folder Not Found");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function clear () {
	$("#targetDiv").empty();
	console.log("cleared");
	$("#targetDiv").prepend("<pre>Proto Eclipse</pre>");	
	$('#targetDiv').scrollTop($('#div1').height());

}
function gmanage (names, value,type, propertyName) {
	var pN=propertyName;
	if(!names&&!value){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
		console.error("Missing Information");
	}
	if(pN){
		//for objects
		computer[names]={[pN]:value};
		$("#targetDiv").prepend("<pre>File Management Complete</pre>");
		console.log("File Management Complete");
	}else if(computer[names]){
		computer[names]=value;
		$("#targetDiv").prepend("<pre>File Management Complete</pre>");
		console.log("File Management Complete");
	}else{
		$("#targetDiv").prepend("<pre>File Not Found</pre>");	
		console.error("File Not Found");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function amanage(action, namez, value){
	var actions, names, values;
	actions=action;
	names=namez;
	values=value;
	actions=actions.toLowerCase();
	switch(actions){
		case "pop":
			computer[names].pop();
			console.log("Pop action");
			break;
		case "shift":
			computer[names].shift();
			console.log("Shift action");
			break;
		case "unshift":
			computer[names].unshift(values);
			console.log("Unshift action");
			break;
		case "push":
			computer[names].push(values);
			console.log("Push action");
			break;
		default:
			$("#targetDiv").prepend("<pre>Invalid Action</pre>");	
			console.error("Invalid Action");
			break;
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function help () {
	for(var out in helps){
		$("#targetDiv").prepend("<pre>"+helps[out]+"</pre>");	
		console.log("Help displayed");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function view () {
	$("#targetDiv").prepend('<pre>' + JSON.stringify(computer,null,1) + '</pre>');  
	console.log("View Command Used");
	$('#targetDiv').scrollTop($('#div1').height());
}
function oc (newFileName,propertyName, value) {
	var newFile,property, values;
	newFile=newFileName;
	property=propertyName;
	values=value;
	if(!newFile||!property||!values){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
		console.error("Missing Information");
	}
	if(!computer[newFile]){
		if(!property){
			computer[newFile]={};
		}else if(!values){
			computer[newFile]={[property]:null};
		}else{
			computer[newFile]={[property]:values};
		}
		$("#targetDiv").prepend("<pre>File Created</pre>");
		console.log("File Created");
	}else{
		$("#targetDiv").prepend("<pre>File Name Exists</pre>");
		console.error("File name exists");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function ac (names, value) {
	var property, values;
	property=names;
	values=value;
	if(!property){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
		console.error("Mission information");
		return false;
	} 
	if(!computer[property]){
		if(!values){
   			computer[property]=[];		
			$("#targetDiv").prepend("<pre>File Created</pre>");
		} 
		else if(values&&property){
   			computer[property]=[values];		
			$("#targetDiv").prepend("<pre>File Created</pre>");
		}
		return true;
		console.log("File created");
	}
	else if(computer[property]){
		$("#targetDiv").prepend("<pre>File Exist</pre>");	
		console.error("File exist");
		return false;	
	}
}
function sc (names, value) {
	var property, values;
	property=names;
	values=value;
	if(!property||!values){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
		console.error("Missing information");
	}
	if(!computer[property]){
		computer[property]=values;
		$("#targetDiv").prepend("<pre>File Created</pre>");
		console.log("File created");
	}else{
		$("#targetDiv").prepend("<pre>File Name Exists</pre>");
		console.error("File name exists");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function loremF () {
	$("#targetDiv").prepend("<pre>"+lorem+"</pre>");
	console.log("lorem displayed");
	$('#targetDiv').scrollTop($('#div1').height());
}
function weather () {
	var unit = "metric";
    $.getJSON("http://ip-api.com/json", function(json){
	    var city, country, lat, lon, apiId;
	    city = json.city;
	    country = json.country;
	    $("#th").html("Location: "+city+", "+country);
	    lat = json.lat;
	    lon = json.lon;
	    apiId = "12ae4ce34fa575032f23a9b8b490e9a9";
	    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID="+apiId+"&units="+unit, function(weatherData ){
		    var self, weather, wind, clouds,description, temp, pressure, humidity, temp_min, temp_max,windeg;
		    self=weatherData;
		    weather = self.weather[0].main;
		    description = self.weather[0].description;
		    wind=self.wind.speed;
		    windeg=self.wind.deg;
		    clouds=self.clouds.all;
		    temp=self.main.temp;
		    pressure=self.main.pressure;
		    humidity=self.main.humidity;
		    temp_min=self.main.temp_min;
		    temp_max=self.main.temp_max;
		    $("#targetDiv").prepend('<pre> Wind: '+wind+' kph</pre>');
		    $("#targetDiv").prepend("<pre> Wind Degree: "+windeg+"&deg;</pre>");
		    $("#targetDiv").prepend("<pre> Temperature: "+temp+"&deg; fahrenheit</pre>");
		    $("#targetDiv").prepend("<pre> Air Pressure: "+pressure+" mbar</pre>");
		    $("#targetDiv").prepend("<pre> Humidity: "+humidity+" kg</pre>");
		    $("#targetDiv").prepend("<pre> Max Temperature Today: "+temp_min+"&deg; fahrenheit</pre>");
		    $("#targetDiv").prepend("<pre> Min Temperature Today: "+temp_max+"&deg; fahrenheit</pre>");
		    $("#targetDiv").prepend("<pre> Clouds: "+clouds+"%</pre>");
		    $("#targetDiv").prepend("<pre> Weather: "+weather+"</pre>");
		    $("#targetDiv").prepend("<pre> Weather Description: "+description+"</pre>");
		    $('#targetDiv').scrollTop($('#div1').height());
		    console.log("Local weather logged");
	  	});
	});
}
function ref () {
	location.reload();
}
function alias(item, itemName){
	var name=itemName;
	var self=computer[item];
	computer[itemName]=self;
	if(computer[itemName]=self){
		$("#targetDiv").prepend("<pre>File Copied</pre>");
		console.log("File Copied");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function history(){
	var output="";
	var rawoutput=[];
	for (var i = 0; i < log.length; i++) {
	   rawoutput.push(log[i]);
	}
	for (var i = 0; i < rawoutput.length; i++) {
		output+="\n Date: ";
		output+=rawoutput[i].date;
		output+="\n New Feature: ";
		output+=rawoutput[i].newFeature;
		output+="\n Bug Removal: ";
		output+=rawoutput[i].bugRemoval;
		output+="\n Optimizations: ";
		output+=rawoutput[i].optimizations;
		output+="\n Comments: ";
		output+=rawoutput[i].comments;
		output+="\n Version: ";
		output+=rawoutput[i].version;
		output+="\n Changes: ";
		output+=rawoutput[i].changes;
		output+="\n -------------------------------------------------------------"
	}
	$("#targetDiv").prepend("<pre>"+output+"</pre>");
	var dates=[];
	var news=[];
	var bug=[];
	var opt=[];
	var changes=[];
	for (var i = 0; i < log.length; i++) {
		dates.push(log[i].date);
		news.push(log[i].newFeatureNumber);
		bug.push(log[i].bugRemovalNumber);
		opt.push(log[i].optimizationsNumber);
		changes.push(log[i].changes);
	}
	$("#targetDiv").prepend("<canvas></canvas>");
	$("canvas").first().attr("id","history");
	$("canvas").first().attr("height","100");
	$("canvas").first().attr("width","300");
	var ticks = [0,1,2,3,4,5,6,7];
	var ctx = document.getElementById("history");
	Chart.defaults.global.elements.line.tension = 0.2;
	var myChart = new Chart(ctx, {
	type: 'line',
	data: {
	    labels: dates,
	    datasets: [
		{
			label: 'New Feature',
			
			data: news,
			borderColor: "rgb(10, 242, 255)"
		},{
			label: 'Bug Removal',
			data: bug,
			
			borderColor: "rgb(34, 255, 10)"
		},{
			label: 'Optimizations',
			data: opt,
			
			borderColor: "rgb(10, 38, 255)"
		},{
			label: 'Changes',
			data: changes,
			
			borderColor: "rgba(153,255,51,0.4)"
		}]
	},
    options: {
    	scales: {
      		yAxes: [{
        		ticks: {
	          		autoSkip: false,
	          		max: ticks[ticks.length - 1],
	          		min: ticks[0]
        		},
			        afterBuildTicks: function(scale) {
			          	scale.ticks = ticks;
			          	return;
			        },
			        beforeUpdate: function(oScale) {
			          	return;
        			}
      			}]
    		}
  		}
	});
	$('#targetDiv').scrollTop($('#div1').height());	
}
function em(){
	var name=prompt("Last, First");
	var sector=prompt("Sector");
	var rank=prompt("Rank");
	var mf=prompt("M/F");
	var ID=prompt("ID");
	var confirmin=false;
	switch(sector){
		case "admin":
			if(admin.indexOf(rank)>-1){
				confirmin=true;
			}
			else{
				$("#targetDiv").prepend("<pre>Rank not found</pre>");
			}
			break;
		case "executive":
			if(executive.indexOf(rank)>-1){
				confirmin=true;
			}
			else{
				$("#targetDiv").prepend("<pre>Rank not found</pre>");
			}
			break;
		case "operational":
			if(operational.indexOf(rank)>-1){
				confirmin=true;
			}
			else{
				$("#targetDiv").prepend("<pre>Rank not found</pre>");
			}
			break;
		default:
			$("#targetDiv").prepend("<pre>Rank not found</pre>");
			break;			
	}
	if(confirmin){
		new Employee(name, sector, rank, mf, ID);
		$("#targetDiv").prepend("<pre>"+"Employee Created; ID: "+ID+"; Name: "+name+"; Sector: "+sector+"; Rank: "+rank+"; M/F: "+mf+"</pre>");
		if(!record[0]){
			record.push(1);
		}else if(record[0]){
			var curr=record[length-1];
			var pu=curr+1;
			record.push(pu);
		}
		console.log(record);
	}else{
		console.log("Employee addition cancled");
		$("#targetDiv").prepend("<pre>Employee addition cancled</pre>");
	}
	$('#targetDiv').scrollTop($('#div1').height());		
}
function emc(id){
	if(!id){
		$("#targetDiv").prepend("<pre>No ID</pre>");
		console.log("No ID");
	}else{
		var change=prompt("What would you want to change? Rank, M/F, Or Name?");
		var field=prompt("What would you change it to?");
		employees[id][change]=field;
		console.log(employees[id][change]);
		$("#targetDiv").prepend("<pre>"+change+" changed to "+field+" on "+id+"</pre>");
	}
	$('#targetDiv').scrollTop($('#div1').height());	
}
function emd(id){
	if(id){
		delete employees[id];
		var lastI=record[record.length-1];
		var pu=lastI-1;
		record.push(pu);
		console.log(record);
		$("#targetDiv").prepend("<pre>Deleted</pre>");

	}else{
		$("#targetDiv").prepend("<pre>No ID</pre>");

	}
	$('#targetDiv').scrollTop($('#div1').height());	

}
function eml(){
	var output="";
	for(var i in employees){
		output+="Name: ";
		output+=employees[i]["name"];
		output+="; ";
		output+=employees[i]["mf"];
		output+="; Sector: ";
		output+=employees[i]["sector"];
		output+="; Rank: ";		
		output+=employees[i]["rank"];
		output+="\n";
	}
	if(output===""){
		$("#targetDiv").prepend("<pre>No Employees</pre>");
	}else{
		$("#targetDiv").prepend("<pre>"+output+"</pre>");
	}
	$('#targetDiv').scrollTop($('#div1').height());	
}
function emp(id){
	var sectors=employees[id]["sector"];
	var rank=employees[id]["rank"];
	if(sectors==="operational"){
		var current=operational.indexOf(rank);
		var promoted=current-1;
		employees[id]["rank"]=operational[promoted];
		$("#targetDiv").prepend("<pre>Promoted</pre>");		
	}else if(sectors==="admin"){
		var current=admin.indexOf(rank);
		var promoted=current-1;
		employees[id]["rank"]=admin[promoted];
		$("#targetDiv").prepend("<pre>Promoted</pre>");		
	}else if(sectors==="executive"){
		var current=executive.indexOf(rank);
		var promoted=current-1;
		employees[id]["rank"]=executive[promoted];
		$("#targetDiv").prepend("<pre>Promoted</pre>");		
	}else{
		$("#targetDiv").prepend("<pre>Sector Not Found</pre>");		
	}
	$('#targetDiv').scrollTop($('#div1').height());	
}
function emdm(id){
	var sectors=employees[id]["sector"];
	var rank=employees[id]["rank"];
	if(sectors==="operational"){
		var current=operational.indexOf(rank);
		var demoted=current+1;
		employees[id]["rank"]=operational[demoted];
		$("#targetDiv").prepend("<pre>Demoted</pre>");		
	}else if(sectors==="admin"){
		var current=admin.indexOf(rank);
		var demoted=current+1;
		employees[id]["rank"]=admin[demoted];
		$("#targetDiv").prepend("<pre>Demoted</pre>");		
	}else if(sectors==="executive"){
		var current=executive.indexOf(rank);
		var demoted=current+1;
		employees[id]["rank"]=executive[demoted];
		$("#targetDiv").prepend("<pre>Demoted</pre>");		
	}else{
		$("#targetDiv").prepend("<pre>Sector Not Found</pre>");		
	}
	$('#targetDiv').scrollTop($('#div1').height());	
}
function hierarchy(){
	console.log("hi")
	var oper="Operational Sector Ranks:\n ";
	var admi="Administrative Sector Ranks:\n ";
	var exe="Executive Sector Ranks:\n ";
	for (var i = 0; i < operational.length; i++) {
		oper+=operational[i];
		oper+="\n ";
	}
	for (var i = 0; i < admin.length; i++) {
		admi+=admin[i];
		admi+="\n ";
	}
	for (var i = 0; i < executive.length; i++) {
		exe+=executive[i];
		exe+="\n ";
	}
	var output=oper+"\n"+"-----------\n"+admi+"\n"+"-----------\n"+exe+"\n"+"-----------\n";
	$("#targetDiv").prepend("<pre>"+output+"</pre>");		
	$('#targetDiv').scrollTop($('#div1').height());	
}
function theme(themeNumber){
	var bkred,bottom, txt;
	switch(themeNumber){
		case "light":
			bkred=light[0];
			bottom=light[1];
			txt=light[2];
			break;
		case "dark":
			bkred=dark[0];
			bottom=dark[1];
			txt=dark[2];
			break;
		case "code":
			bkred=code[0];
			bottom=code[1];
			txt=code[2];
			break;
		case "solarized":
			bkred=solarized[0];
			bottom=solarized[1];
			txt=solarized[2];
			break;
		case "polar":
			bkred=polar[0];
			bottom=polar[1];
			txt=polar[2];
			break;
		case "vulcan":
			bkred=vulcan[0];
			bottom=vulcan[1];
			txt=vulcan[2];
			break;
		case "reversedLight":
			bkred=reversedLight[0];
			bottom=reversedLight[1];
			txt=reversedLight[2];
			break;
		default:
			$("#targetDiv").prepend("<pre>Light, dark, code, solarized, polar, vulcan, reversedLight</pre>");		
			break;
	}
	$("#targetDiv").css("background-color",bkred);
	$("#input").css("background-color",bkred);
	$("#footer").css("background-color",bottom);
	$("pre").css("color",txt);
}