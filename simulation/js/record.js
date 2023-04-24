var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



 
function datasheet() {
  document.getElementById("sno").innerHTML = "1";
  document.getElementById("height").innerHTML = "75.015";
  document.getElementById("x").innerHTML = "70";
  document.getElementById("y").innerHTML = "17";
  document.getElementById("t").innerHTML = "10";

  var x=70;
  var y=17;
  
  var t=10;
  var area=30;
  var r=20;
  var qa= (area*r)/t;
  document.getElementById("qa").innerHTML = qa;

  var areaor=1.2667;
  var g=9.81;
  var c= areaor* Math.sqrt(19.62);          // 2*g= 19.62
  var H=75.015;                          // H=head
  var qth= c * Math.sqrt(H);              
  var qth=parseFloat(qth).toFixed( 4 );
  document.getElementById("qth").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 4 );
  document.getElementById("cd").innerHTML = cd;
  
  var de=4*y*H;
  var cv= x/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 4 );
  document.getElementById("cv").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 4 );
  document.getElementById("cc").innerHTML = cc;


  document.getElementById("sno1").innerHTML = "2";
  document.getElementById("height1").innerHTML = "67.915";
  document.getElementById("x1").innerHTML = "67.9";
  document.getElementById("y1").innerHTML = "18";
  document.getElementById("t1").innerHTML = "10";

  var x1=67.9;
  var y1=18;
  
  var t=10;
  var area=30;
  var r=20;
  var qa= (area*r)/t;
  document.getElementById("qa1").innerHTML = qa;

  var areaor=1.2667;
  var g=9.81;
  var c= areaor* Math.sqrt(19.62);
  var H=67.915;                          // H=head
  var qth= c * Math.sqrt(H); 
  var qth=parseFloat(qth).toFixed( 4 );
  document.getElementById("qth1").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 4 );
  document.getElementById("cd1").innerHTML = cd;
  
  var de=4*y1*H;
  var cv= x1/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 4 );
  document.getElementById("cv1").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 4 );
  document.getElementById("cc1").innerHTML = cc;




  document.getElementById("sno2").innerHTML = "3";
  document.getElementById("height2").innerHTML = "51.765";
  document.getElementById("x2").innerHTML = "65.1";
  document.getElementById("y2").innerHTML = "18.5";
  document.getElementById("t2").innerHTML = "10";

  var x2=65.1;
  var y2=18.5;
  
  var t=10;
  var area=30;
  var r=20;
  var qa= (area*r)/t;
  document.getElementById("qa2").innerHTML = qa;

  var areaor=1.2667;
  var g=9.81;
  var c= areaor* Math.sqrt(19.62);
  var H=51.765;                          
  var qth= c * Math.sqrt(H); 
  var qth=parseFloat(qth).toFixed( 4 );
  document.getElementById("qth2").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 4 );
  document.getElementById("cd2").innerHTML = cd;
  
  var de=4*y2*H;
  var cv= x2/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 4 );
  document.getElementById("cv2").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 4 );
  document.getElementById("cc2").innerHTML = cc;




  document.getElementById("sno3").innerHTML = "4";
  document.getElementById("height3").innerHTML = "60.815";
  document.getElementById("x3").innerHTML = "63.1";
  document.getElementById("y3").innerHTML = "19";
  document.getElementById("t3").innerHTML = "10";

  var x3=63.1;
  var y3=19;
  
  var t=10;
  var area=30;
  var r=20;
  var qa= (area*r)/t;
  document.getElementById("qa3").innerHTML = qa;

  var areaor=1.2667;
  var g=9.81;
  var c= areaor* Math.sqrt(19.62);
  var H=60.815;                          
  var qth= c * Math.sqrt(H); 
  var qth=parseFloat(qth).toFixed( 4 );
  document.getElementById("qth3").innerHTML = qth;

  
  var cd=qa/qth;
  var cd=parseFloat(cd).toFixed( 4 );
  document.getElementById("cd3").innerHTML = cd;
  
  var de=4*y3*H;
  var cv= x3/Math.sqrt(de);
  var cv=parseFloat(cv).toFixed( 4 );
  document.getElementById("cv3").innerHTML = cv;

  var cc=cd/cv;
  var cc=parseFloat(cc).toFixed( 4 );
  document.getElementById("cc3").innerHTML = cc;


}



  var slider1 = document.getElementById("rangey");
  var output1 = document.getElementById("range-value");
  output1.innerHTML = slider1.value;
  
  slider1.oninput = function() {
    output1.innerHTML = this.value;
  }