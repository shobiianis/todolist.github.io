
var display=document.getElementById("display")
var div=document.getElementById("parent");

function add()
{
    
displayValues=display.value;
var p=document.createElement("p");
var text=document.createTextNode(displayValues+" ");
p.appendChild(text);

var button=document.createElement("button");
var btnText=document.createTextNode("Done")
button.appendChild(btnText);
p.appendChild(button)

var button2=document.createElement("button");
var btnText2=document.createTextNode("Edit");
button2.appendChild(btnText2);
p.appendChild(button2);

button.setAttribute("onclick","del(this)");
button2.setAttribute("onclick","edit(this)");

// -------------------------------------
// yahan se woh code hai jisse koi faraq parega

button.setAttribute("class","del");
button2.setAttribute("class","edit");













// -------------------------------------




div.appendChild(p);

display.value="";

}

var pp;
function del(para){

   pp= para.parentNode;
   // div.removeChild(pp)

   //ye neeche jo code hai ye removechild ki jagah aya hai
   pp.innerHTML="Congragulations for Completeting task"
   
}



function edit(x){


updatedPara=x.parentNode;
a=updatedPara.childNodes[0];
b=updatedPara.childNodes[0].length

y=a.substringData(0,b);
display.value=y;

div.removeChild(updatedPara); 
}

