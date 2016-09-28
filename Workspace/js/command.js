var helps={
	help1:"PROTO ECLIPSE HELP MENU: ",
	help2:"COMMANDS ARE DISPLAYED WITHIN PARENTHESISES: (command)",
	help7:"(del name) ENTER THE FOLDER YOU WISH TO DELETE IN NAME",
	helpa:"(object name propertyName value) CREATES A OBJECT WITHIN COMPUTER",
	helpb:"(array name value) CREATES A ARRAY WITHIN COMPUTER",
	helpc:"(string name value) CREATES A STRING WITHIN COMPUTER",
	help8:"(gmanage name value type propertyName(only if object)) MAKE CHANGE TO THE FILE WITH THE NAME IN (name) AND THE VALUE YOU WISH TO ADD/CHANGE IN (value)",
	lol:"(amanage action name value) TO MANAGE ARRAY; ACTIONS ARE PUSH, SHIFT, UNSHIFT, POP. VALUE IS NEEDED FOR UNSHIFT AND PUSH",
	help10:"(help) OPENS THIS MESSAGE",
	doesntMatter:"(view) PRINTS ALL DIRECTORY WITHIN WORKSPACE",
	clear:"(clear) CLEARS WORKSPACE"
}
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
				case "gmanage":
					feed="gmanage";
					break;
				case "amanage":
					feed="amanage"
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
			$("#targetDiv").prepend('<pre>'+error+'</pre>');
			break;
	}
};
function del (folder) {
	if(computer[folder]){
		delete computer[folder];
	}else{
		$("#targetDiv").prepend("<pre>Folder Not Found</pre>");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function clear () {
	$("#targetDiv").empty();
}
//for array:
//pop, shift, unshift, push
function gmanage (names, value,type, propertyName) {
	var pN=propertyName;
	if(!names&&!value){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
	}
	if(pN){
		//for objects
		computer[names]={[pN]:value};
	}else if(computer[names]){
		computer[names]=value;
		$("#targetDiv").prepend("<pre>File Management Complete</pre>");
	}else{
		$("#targetDiv").prepend("<pre>File Not Found</pre>");	
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
			break;
		case "shift":
			computer[names].shift();
			break;
		case "unshift":
			computer[names].unshift(values);
			break;
		case "push":
			computer[names].push(values);
			break;
		default:
			$("#targetDiv").prepend("<pre>Invalid Action</pre>");	
			break;
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function help () {
	for(var out in helps){
		$("#targetDiv").prepend("<pre>"+helps[out]+"</pre>");	
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function view () {
	$("#targetDiv").prepend('<pre>' + JSON.stringify(computer,null,1) + '</pre>');  
	$('#targetDiv').scrollTop($('#div1').height());
}
function oc (newFileName,propertyName, value) {
	var newFile,property, values;
	newFile=newFileName;
	property=propertyName;
	values=value;
	if(!newFile||!property||!values){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
	}
	if(!computer[newFile]){
		computer[newFile]={[property]:values};
		$("#targetDiv").prepend("<pre>File Created</pre>");
	}else{
		$("#targetDiv").prepend("<pre>File Name Exists</pre>");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}
function ac (names, value) {
	var property, values;
	property=names;
	values=value;
	if(!property||!values){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
	}
	if(!computer[property]){
   		computer[property]=[values];		
		$("#targetDiv").prepend("<pre>File Created</pre>");
	}else{
		$("#targetDiv").prepend("<pre>File Name Exists</pre>");
	}		
	$('#targetDiv').scrollTop($('#div1').height());
}
function sc (names, value) {
	var property, values;
	property=names;
	values=value;
	if(!property||!values){
		$("#targetDiv").prepend("<pre>Missing Information</pre>");
	}
	if(!computer[property]){
		computer[property]=values;
		$("#targetDiv").prepend("<pre>File Created</pre>");
	}else{
		$("#targetDiv").prepend("<pre>File Name Exists</pre>");
	}
	$('#targetDiv').scrollTop($('#div1').height());
}