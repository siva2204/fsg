var numb1=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var numb11=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var numb111=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var numb10=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var numb2=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var numb5=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var numb3=[40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21];
var numb4=[40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21];
var numb6=[40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21];
var numb7=[40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21];
var numb8=[60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41];
var numb9=[60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41];
var x=numb1.length-1;
var y=numb2.length-1;
var z=numb3.length-1;
var u=numb4.length-1;
var v=numb5.length-1;
var f=numb6.length-1;
var g=numb7.length-1;
var l=numb8.length-1;
var p=numb9.length-1;
var b=numb10.length-1;

var checklevel1=[];
var checklevel2=[];
var checklevel3=[];



var statuslvl1=null;
var statuslvl2=null;
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

 var inneritem1=document.getElementsByClassName("grid-item-1");
 var inneritem2=document.getElementsByClassName("grid-item-2");
 var inneritem3=document.getElementsByClassName("grid-item-3");
 input123();

 function input123(){
 	numb1=shuffle(numb1);
 	numb11=shuffle(numb11);
 	numb111=shuffle(numb111);
 	for (var i = 0; i <20; i++) {
 		inneritem1[i].innerHTML=numb1[i];
 	}
 	for (var i = 0; i <20; i++) {
 		inneritem2[i].innerHTML=numb11[i];
 	}
 	for (var i = 0; i <20; i++) {
 		inneritem3[i].innerHTML=numb111[i];
 	}
 }

//-----------------------------removeitem------------------
function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if(arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
} 



 //shuffle array--------------------------------------------------------------------------------------------------------------
 function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  
   while (0 !== currentIndex) {

    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

   
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

 //sound effects---------------------------------------------------------------------------------------------------------------
 function sound(){
 	
 	beep.play();

 }






//level 1------------------------------------------------------------------------------------------------------------------------
function level1(id){
	if(id.innerHTML==numb10[b]){
		id.innerHTML=" ";
		b--;


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
var store1;


function start1(){
   interval1=window.setInterval(stopwatch1,1);
   start1= function(){}; 


}
	
function stop1(){
	checklevel1=[inneritem1[0].innerHTML,inneritem1[1].innerHTML,inneritem1[2].innerHTML,inneritem1[3].innerHTML,inneritem1[4].innerHTML,inneritem1[5].innerHTML,inneritem1[6].innerHTML,inneritem1[7].innerHTML,inneritem1[8].innerHTML,inneritem1[9].innerHTML,inneritem1[10].innerHTML,inneritem1[11].innerHTML,inneritem1[12].innerHTML,inneritem1[13].innerHTML,inneritem1[14].innerHTML,inneritem1[15].innerHTML,inneritem1[16].innerHTML,inneritem1[17].innerHTML,inneritem1[18].innerHTML,inneritem1[19].innerHTML];	
   
	checklevel1=removeItemAll(checklevel1," ");
     console.log(checklevel1);


	

	
	
    if (checklevel1.length==0) {
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
	        document.getElementById("g").innerHTML="G"
		    document.getElementById("a").innerHTML="A"
		    document.getElementById("m").innerHTML="M"
		    document.getElementById("e").innerHTML="E"
		    document.getElementById("o").innerHTML="O"
		    document.getElementById("v").innerHTML="V"
		    document.getElementById("e2").innerHTML="E"
		    document.getElementById("r").innerHTML="R"

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
numb3=shuffle(numb3);
function level2(id){
	if (id.innerHTML==numb2[y]) {
		id.innerHTML=numb3[z];
		y--;
		z--;
	}
	else if (id.innerHTML==numb4[u]) {
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
	 
		interval2=window.setInterval(stopwatch2,1);
		 start2= function(){}; 


	
	
		
	

}
function stop2(id){
	
	checklevel2=[inneritem2[0].innerHTML,inneritem2[1].innerHTML,inneritem2[2].innerHTML,inneritem2[3].innerHTML,inneritem2[4].innerHTML,inneritem2[5].innerHTML,inneritem2[6].innerHTML,inneritem2[7].innerHTML,inneritem2[8].innerHTML,inneritem2[9].innerHTML,inneritem2[10].innerHTML,inneritem2[11].innerHTML,inneritem2[12].innerHTML,inneritem2[13].innerHTML,inneritem2[14].innerHTML,inneritem2[15].innerHTML,inneritem2[16].innerHTML,inneritem2[17].innerHTML,inneritem2[18].innerHTML,inneritem2[19].innerHTML];	
	checklevel2=removeItemAll(checklevel2," ");
	console.log(checklevel2);

	if (checklevel2.length==0) {
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
	        document.getElementById("bt1").innerHTML=recordtimes1[0];
	        document.getElementById("g1").innerHTML="G"
		    document.getElementById("a1").innerHTML="A"
		    document.getElementById("m1").innerHTML="M"
		    document.getElementById("e1").innerHTML="E"
		    document.getElementById("o1").innerHTML="O"
		    document.getElementById("v1").innerHTML="V"
		    document.getElementById("e21").innerHTML="E"
		    document.getElementById("r1").innerHTML="R"


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
numb6=shuffle(numb6);
numb8=shuffle(numb8);
function level3(id){
	if (id.innerHTML==numb5[v]) {
		id.innerHTML=numb6[f];
		v--;
		f--;
	}
	else if (id.innerHTML==numb7[g]) {
		id.innerHTML=numb8[l];
		g--;
		l--;

	}
	else if (id.innerHTML==numb9[p]) {
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
	
		interval3=window.setInterval(stopwatch3,1);
		 start3= function(){}; 


	
	
		
	

}
function stop3(id){
	checklevel3=[inneritem3[0].innerHTML,inneritem3[1].innerHTML,inneritem3[2].innerHTML,inneritem3[3].innerHTML,inneritem3[4].innerHTML,inneritem3[5].innerHTML,inneritem3[6].innerHTML,inneritem3[7].innerHTML,inneritem3[8].innerHTML,inneritem3[9].innerHTML,inneritem3[10].innerHTML,inneritem3[11].innerHTML,inneritem3[12].innerHTML,inneritem3[13].innerHTML,inneritem3[14].innerHTML,inneritem3[15].innerHTML,inneritem3[16].innerHTML,inneritem3[17].innerHTML,inneritem3[18].innerHTML,inneritem3[19].innerHTML];	
	checklevel3=removeItemAll(checklevel3," ");
	console.log(checklevel3);
	if (checklevel3.length==0) {
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
		    document.getElementById("g2").innerHTML="G"
		    document.getElementById("a2").innerHTML="A"
		    document.getElementById("m2").innerHTML="M"
		    document.getElementById("ell").innerHTML="E"
		    document.getElementById("o2").innerHTML="O"
		    document.getElementById("v2").innerHTML="V"
		    document.getElementById("e22").innerHTML="E"
		    document.getElementById("r2").innerHTML="R"

           

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