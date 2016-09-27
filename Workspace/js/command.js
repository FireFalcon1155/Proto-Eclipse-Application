var helps={
	help1:"PROTO ECLIPSE HELP MENU: ",
	help2:"COMMANDS ARE DISPLAYED WITHIN PARENTHESISES: (command)",
	help3:"WHEN INSTRUCTION INSTRUCTS YOU TO ENTER A VALUE IN BLANK, REPLACE THE WORD WITH THE VALUE. EXAMPLE: COMMAND BEING (manage name value) AND INSTRUCTION BEING MAKE CHANGE TO THE FILE WITH THE NAME IN (name). REPLACE (name) WITH THE VALUE",
	help4:"WHEN YOU ARE SPECIFING TO A DIRECTORY, YOU MUST LIST THE PATH TO. EX: HOME ",
	help7:"(del name) ENTER THE FOLDER YOU WISH TO DELETE IN NAME",
	helpa:"(object name propertyName value)",
	helpb:"(array name value)",
	helpc:"(string name value)",
	help8:"(manage name value propertyName(only if object)) MAKE CHANGE TO THE FILE WITH THE NAME IN (name) AND THE VALUE YOU WISH TO ADD/CHANGE IN (value)",
	help10:"(help) OPENS THIS MESSAGE",
	help11:"(view) PRINTS ALL DIRECTORY WITHIN WORKSPACE"
}
//for object:
//remove n item
//manage n item
//push item
//for array:
//pop, shift, unshift, push
var input;
var error="Command Not Found"
var one, two, three, four, five;
function main (item) {
	var items=item.split(" ");
	var feed=" ";
	//$"home value"
	for(i=0;i<items.length;i++){
			switch (items[i]) {
				case "del":
					feed="del";
					break;
				case "clear":
					feed="clear";
					break;
				case "manage":
					feed="manage";
					break;
				case "help":
					feed="help";
					break;
				case "view":
					feed="view";
					break;
				case "object":
					feed="oC";
					break;
				case "array":
					feed="aC";
					break;
				case "string":
					feed="sC";
					break;
			}
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
		case "manage":
			one=arryr[1];
			two=arryr[2];
			three=arryr[3];
			manage(one,two,three);
			break;
		case "help":
			help();
			break;
		case "view":
			view();
			break;
		case "oC":
			one=arryr[1];
			two=arryr[2];
			three=arryr.slice(3);
			three=three.join(" ");
			oc(one,two,three);
			break;
		case "aC":
			one=arryr[1];
			two=arryr.slice(2);
			two=two.join(" ");
			ac(one,two);
			break;
		case "sC":
			one=arryr[1];
			two=arryr.slice(2);
			two=two.join(" ");
			sc(one,two);
			break;
		default:
			$("#targetDiv").append('<pre>'+error+'</pre>');
			break;
	}
};
//selecting last item in array
// my_array[my_array.length - 1];
function del (folder) {
	if(computer[folder]){
		delete computer[folder];
	}else{
		$("#targetDiv").append("<pre>Folder Not Found</pre>");
	}
	$('#targetDiv').animate({ 
	   scrollTop: $(document).height()+$(window).height()}
	);
}
function clear () {
	$("#targetDiv").empty();
}
function manage (name, propertyName, value) {
	var pN=propertyName;
	if(pN){
		computer[name]={[pN]:value};
	}else if(computer[name]){
		computer[name]=value;
		$("#targetDiv").append("<pre>File Management Complete</pre>");
	}else{
		$("#targetDiv").append("<pre>File Not Found</pre>");	
	}
	$('#targetDiv').animate({ 
	   scrollTop: $(document).height()+$(window).height()}
	);
}
function help () {
	for(var out in helps){
		$("#targetDiv").append("<pre>"+helps[out]+"</pre>");	
	}
	$('#targetDiv').animate({ 
	   scrollTop: $(document).height()+$(window).height()}
	);
}
function view () {
	$("#targetDiv").append('<pre>' + JSON.stringify(computer,null,1) + '</pre>');  
	$('#targetDiv').animate({ 
	   scrollTop: $(document).height()+$(window).height()}
	);
}
function oc (newFileName,propertyName, value) {
	var newFile,property, values;
	newFile=newFileName;
	property=propertyName;
	values=value;
	if(!computer[newFile]){
		computer[newFile]={[property]:values};
		$("#targetDiv").append("<pre>File Created</pre>");
	}else{
		$("#targetDiv").append("<pre>File Name Exists</pre>");
	}
	$('#targetDiv').animate({ 
	   scrollTop: $(document).height()+$(window).height()}
	);
}
function ac (names, value) {
	var property, values;
	property=names;
	values=value;
	if(!computer[property]){
   		computer[property]=[values];		
		$("#targetDiv").append("<pre>File Created</pre>");
	}else{
		$("#targetDiv").append("<pre>File Name Exists</pre>");
	}		
	$('#targetDiv').animate({ 
	   scrollTop: $(document).height()+$(window).height()}
	);
}
function sc (names, value) {
	var property, values;
	property=names;
	values=value;
	if(!computer[property]){
		computer[property]=values;
		$("#targetDiv").append("<pre>File Created</pre>");
	}else{
		$("#targetDiv").append("<pre>File Name Exists</pre>");
	}
	$('#targetDiv').animate({ 
	   scrollTop: $(document).height()+$(window).height()}
	);
}