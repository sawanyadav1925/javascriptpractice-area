function myfun(){
    var x=document.getElementById("length").value;
    var y=document.getElementById("width").value;
    var area=x*y;
    
    console.log(area);
   // document.getElementById('remm').innerHTML
    document.getElementById('remm').innerHTML="<p>"+"area of rectangle="+area+"</p>";
    var perimeter=(2*x+2*y);
    document.getElementById('remm1').innerHTML="<p>"+"perimeter of rectangle="+perimeter+"</p>";




}