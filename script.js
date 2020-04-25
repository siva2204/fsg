var numb=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var numb2=numb;
var numb5=numb;
var numb3=[40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21];
var numb4=numb3;
var numb6=numb3;
var numb7=numb3;
var numb8=[60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41];
var numb9=numb8;
var x=numb.length-1;
var y=numb2.length-1;
var z=numb3.length-1;
var u=numb4.length-1;
var v=numb5.length-1;
var f=numb6.length-1;
var g=numb7.length-1;
var l=numb8.length-1;
var p=numb9.length-1;

var statuslvl2=0;
var ststuslvl3=null;
var status=null;

var millisecond=0;
var second=0;
var display_millisecond=0;
var display_second=0;

var millisecond2=0;
var second2=0;
var display_millisecond2=0;
var display_second2=0;

var millisecond3=0;
var second3=0;
var display_millisecond3=0;
var display_second3=0;

var interval1=null;
var interval2=null;
var interval3=null;


var storetimes1=[];
var storetimes2=[];
var storetimes3=[];


var beep= new Audio();
beep.src="beep.mp3";



recordtimes1=JSON.parse(localStorage.getItem("recordtimes1"));
 if (recordtimes1!=null) {
 	 recordtimes1.sort();
 	 
     document.getElementById("bt1").innerHTML=recordtimes1[0];

 }

 recordtimes2=JSON.parse(localStorage.getItem("recordtimes2"));
 if (recordtimes2!=null) {
 	 recordtimes2.sort();
 	
     document.getElementById("bt2").innerHTML=recordtimes2[0];

 }
recordtimes3=JSON.parse(localStorage.getItem("recordtimes3"));
 if (recordtimes3!=null) {
 	 recordtimes3.sort();
     document.getElementById("bt3").innerHTML=recordtimes3[0];

 }


 //sound effects---------------------------------------------------------------------------------------------------------------
 function sound(){
 	
 	beep.play();

 }






//level 1------------------------------------------------------------------------------------------------------------------------
function level1(id){
	if(id.innerHTML==numb[x]){
		id.innerHTML=" ";
		x--;


	}


}
function stopwatch1(){
	millisecond++;
	if (millisecond===1000) {
		millisecond=0;
		second++;
	}

    if (millisecond < 10) {
        display_millisecond = "00" + millisecond; 
    }               
    else if (millisecond < 100) {
        display_millisecond  = "0" + millisecond;
    }
    else {
        display_millisecond  =  millisecond;
    }
    if (second < 10) {
        display_second = "0" + second;
    }
    else {
        display_second= second; 
    }
	document.getElementById("t1").innerHTML= display_second + ":" + display_millisecond;

}
function start1(id){
	if (id.innerHTML==" ") {
		interval1=window.setInterval(stopwatch1,1);
	}
}	
	
function stop1(id){
	if (id.innerHTML==" ") {
		window.clearInterval(interval1);
		document.getElementById("show1").style.visibility="visible";
		document.getElementById("level1show").innerHTML= display_second + ":" + display_millisecond;
		if (recordtimes1==null) {
		      recordtimes1=[];	
			  recordtimes1[recordtimes1.length]=document.getElementById('t1').innerHTML;
			  localStorage.setItem("recordtimes1",JSON.stringify(recordtimes1));
		    }
		    else{
		    	recordtimes1[recordtimes1.length]=document.getElementById('t1').innerHTML;
		    	localStorage.setItem("recordtimes1",JSON.stringify(recordtimes1));
		    }
		    recordtimes1.sort();
            
	        document.getElementById("bt1").innerHTML=recordtimes1[0];

	}
	
}

function visiblelvl1(){
	recordtimes1.sort();

	 document.getElementById("0").innerHTML=recordtimes1[0];
	 document.getElementById("1").innerHTML=recordtimes1[1];
	 document.getElementById("2").innerHTML=recordtimes1[2];
	 document.getElementById("3").innerHTML=recordtimes1[3];
	 document.getElementById("4").innerHTML=recordtimes1[4];
	 document.getElementById("hidden1").style.visibility="visible"
}




//level2--------------------------------------------------------------------------------------------------------------------------
function allowlvl2(id){
	if (id.innerHTML==40) {
		statuslvl2=1;

	}
	else{
		statuslvl2=0;
	}
}
function level2(id){
	if (id.innerHTML==numb2[y]) {
		id.innerHTML=numb3[z];
		y--;
		z--;
	}
	else if (id.innerHTML==numb4[u] && statuslvl2==1) {
		id.innerHTML=" ";
		u--;
	}
	
}
function stopwatch2(){
	millisecond2++;
	if (millisecond2===1000) {
		millisecond2=0;
		second2++;
	}

    if (millisecond2 < 10) {
        display_millisecond2 = "00" + millisecond2; 
    }               
    else if (millisecond2 < 100) {
        display_millisecond2  = "0" + millisecond2;
    }
    else {
        display_millisecond2  =  millisecond2;
    }
    if (second2 < 10) {
        display_second2 = "0" + second2;
    }
    else {
        display_second2= second2; 
    }
	document.getElementById('t2').innerHTML= display_second2 + ":" + display_millisecond2;

}
function start2(id){
	if (id.innerHTML==21) {
		interval2=window.setInterval(stopwatch2,1);


	}
	
		
	

}
function stop2(id){
	if (id.innerHTML==" ") {
		window.clearInterval(interval2);
		document.getElementById("show2").style.visibility="visible";
		document.getElementById("level2show").innerHTML= display_second2 + ":" + display_millisecond2;
		if (recordtimes2==null) {
		      recordtimes2=[];	
			  recordtimes2[recordtimes2.length]=document.getElementById('t2').innerHTML;
			  localStorage.setItem("recordtimes2",JSON.stringify(recordtimes2));
		    }
		    else{
		    	recordtimes2[recordtimes2.length]=document.getElementById('t2').innerHTML;
		    	localStorage.setItem("recordtimes2",JSON.stringify(recordtimes2));
		    }
		    recordtimes2.sort(); 
	        document.getElementById("bt2").innerHTML=recordtimes2[0];


	}

}

function visiblelvl2(){
	 recordtimes2.sort();
	 document.getElementById("6").innerHTML=recordtimes2[0];
	 document.getElementById("7").innerHTML=recordtimes2[1];
	 document.getElementById("8").innerHTML=recordtimes2[2];
	 document.getElementById("9").innerHTML=recordtimes2[3];
	 document.getElementById("10").innerHTML=recordtimes2[4];
	  document.getElementById("hidden2").style.visibility="visible"

}


//level3------------------------------------------------------------------------------------------------------------------
function allowlvl3(id){
	if (id.innerHTML==40) {
		statuslvl3=1;
	}
}
function allow2lvl3(id){
	if (id.innerHTML==60) {
		status=1;
	}
}
function level3(id){
	if (id.innerHTML==numb5[v]) {
		id.innerHTML=numb6[f];
		v--;
		f--;
	}
	else if (id.innerHTML==numb7[g] && statuslvl3==1 ) {
		id.innerHTML=numb8[l];
		g--;
		l--;

	}
	else if (id.innerHTML==numb9[p] && status==1 ) {
		id.innerHTML=" ";
		p--;
	}
}
function stopwatch3(){
	millisecond3++;
	if (millisecond3===1000) {
		millisecond3=0;
		second3++;
	}

    if (millisecond3 < 10) {
        display_millisecond3 = "00" + millisecond3; 
    }               
    else if (millisecond3 < 100) {
        display_millisecond3  = "0" + millisecond3;
    }
    else {
        display_millisecond3  =  millisecond3;
    }
    if (second3 < 10) {
        display_second3 = "0" + second3;
    }
    else {
        display_second3= second3; 
    }
	document.getElementById('t3').innerHTML= display_second3 + ":" + display_millisecond3;

}
function start3(id){
	if (id.innerHTML==21) {
		interval3=window.setInterval(stopwatch3,1);


	}
	
		
	

}
function stop3(id){
	if (id.innerHTML==" ") {
		window.clearInterval(interval3);
		document.getElementById("show3").style.visibility="visible";
		document.getElementById("level3show").innerHTML= display_second3 + ":" + display_millisecond3;
		if (recordtimes3==null) {
		      recordtimes3=[];	
			  recordtimes3[recordtimes3.length]=document.getElementById('t3').innerHTML;
			  localStorage.setItem("recordtimes3",JSON.stringify(recordtimes3));
		    }
	    else{
		    	recordtimes3[recordtimes3.length]=document.getElementById('t3').innerHTML;
		    	localStorage.setItem("recordtimes3",JSON.stringify(recordtimes3));
		    }
		    recordtimes3.sort();
		    document.getElementById("bt3").innerHTML=recordtimes3[0];

           

	}

}
function visiblelvl3(){
	 recordtimes3.sort();
	 document.getElementById("11").innerHTML=recordtimes3[0];
	 document.getElementById("12").innerHTML=recordtimes3[1];
	 document.getElementById("13").innerHTML=recordtimes3[2];
	 document.getElementById("14").innerHTML=recordtimes3[3];
	 document.getElementById("15").innerHTML=recordtimes3[4];
	 document.getElementById("hidden3").style.visibility="visible"

}












//reloads the page---cintrol restart butt0n------------------------------------------------------------------------------------
function reload(){
	location.reload(false);
}