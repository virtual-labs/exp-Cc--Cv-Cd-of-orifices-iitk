var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

document.getElementById("read1").style.visibility = "hidden";

var output1 = document.getElementById("range-value");
output1.innerHTML=19;
slider.oninput = function()

{
  if(slider.value==63.1){
    output.innerHTML = this.value;
  output1.innerHTML=19;
  
}
else if(slider.value==65.3){
  output.innerHTML = 65.1;
    output1.innerHTML = 18.5;
   
}
else if(slider.value==67.5){
  output.innerHTML = 67.9;
  output1.innerHTML=18;
 
}
else if(slider.value==69.7){
  output.innerHTML = 70;
  output1.innerHTML=17;
  
}
else{
  output1.innerHTML=0;
}}
 




function datasheet() {
  if(slider.value==69.7)
  {
    document.getElementById("sno").innerHTML = "1";
  document.getElementById("height").innerHTML = "75.015";
  document.getElementById("x").innerHTML = "70";
  document.getElementById("y").innerHTML = "17";
  document.getElementById("t").innerHTML = "146";

  var x=70;
  var y=17;
  
  var t=146;
  var area=2500;
  var r=20;
  var qa= (area*r)/t;
  var qa=parseFloat(qa).toFixed( 3 );
  //document.getElementById("qa").innerHTML = qa;

  var areaor=1.259;
  var g=981;
  var c= areaor* Math.sqrt(2*g);          
  var H=75.015;                          
  var qth= c * Math.sqrt(H);              
  var qth=parseFloat(qth).toFixed( 3 );
  //document.getElementById("qth").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 3 );
  //document.getElementById("cd").innerHTML = cd;
  
  var de=4*y*H;
  var cv= x/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 3 );
  //document.getElementById("cv").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 3 );
 // document.getElementById("cc").innerHTML = cc;
 document.getElementById("read1").style.visibility = "visible";
}

else if(slider.value==67.5)
  {
    document.getElementById("sno").innerHTML = "1";
  document.getElementById("height").innerHTML = "67.915";
  document.getElementById("x").innerHTML = "67.9";
  document.getElementById("y").innerHTML = "18";
  document.getElementById("t").innerHTML = "151";

  var x1=67.9;
  var y1=18;
  
  var t=151;
  var area=2500;
  var r=20;
  var qa= (area*r)/t;
  var qa=parseFloat(qa).toFixed( 3 );
  //document.getElementById("qa").innerHTML = qa;

  var areaor=1.259;
  var g=981;
  var c= areaor* Math.sqrt(2*g);
  var H=67.915;                          // H=head
  var qth= c * Math.sqrt(H); 
  var qth=parseFloat(qth).toFixed( 3 );
  //document.getElementById("qth").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 3 );
  //document.getElementById("cd").innerHTML = cd;
  
  var de=4*y1*H;
  var cv= x1/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 3 );
  //document.getElementById("cv1").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 3 );
  //document.getElementById("cc1").innerHTML = cc;
  document.getElementById("read1").style.visibility = "visible";
}


  else if(slider.value==65.3)

  {
    document.getElementById("sno").innerHTML = "1";
  document.getElementById("height").innerHTML = "51.765";
  document.getElementById("x").innerHTML = "65.1";
  document.getElementById("y").innerHTML = "18.5";
  document.getElementById("t").innerHTML = "179";

  var x2=65.1;
  var y2=18.5;
  
  var t=179;
  var area=2500;
  var r=20;
  var qa= (area*r)/t;
  var qa=parseFloat(qa).toFixed( 3 );
  //document.getElementById("qa").innerHTML = qa;

  var areaor=1.259;
  var g=981;
  var c= areaor* Math.sqrt(2*g);
  var H=51.765;                          
  var qth= c * Math.sqrt(H); 
  var qth=parseFloat(qth).toFixed( 3 );
  //document.getElementById("qth").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 3 );
  //document.getElementById("cd").innerHTML = cd;
  
  var de=4*y2*H;
  var cv= x2/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 3 );
  //document.getElementById("cv2").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 3 );
 // document.getElementById("cc2").innerHTML = cc;
 document.getElementById("read1").style.visibility = "visible";
}

else if(slider.value==63.1)

  {
    document.getElementById("sno").innerHTML = "1";
  document.getElementById("height").innerHTML = "60.815";
  document.getElementById("x").innerHTML = "63.1";
  document.getElementById("y").innerHTML = "19";
  document.getElementById("t").innerHTML = "162";

  var x3=63.1;
  var y3=19;
  
  var t=162;
  var area=2500;
  var r=20;
  var qa= (area*r)/t;
  var qa=parseFloat(qa).toFixed( 3 );
  //document.getElementById("qa").innerHTML = qa;

  var areaor=1.259;
  var g=981;
  var c= areaor* Math.sqrt(2*g);
  var H=60.815;                          
  var qth= c * Math.sqrt(H); 
  var qth=parseFloat(qth).toFixed( 3 );
  //document.getElementById("qth").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 3 );
  //document.getElementById("cd").innerHTML = cd;
  
  var de=4*y3*H;
  var cv= x3/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 3 );
  //document.getElementById("cv3").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 3 );
  //document.getElementById("cc3").innerHTML = cc;
  document.getElementById("read1").style.visibility = "visible";
}
else{
  document.getElementById("read1").style.visibility = "hidden";
}
}

function submit(){
  var cdtext = document.getElementById("cd");
  if(cdtext.value>1){
    alert("Value of cd should be less than 1");
  }
  else{
    alert("Submitted");
  }
}



