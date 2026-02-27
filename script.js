let display=document.getElementById("display");

function press(v){
if(display.innerText==="0") display.innerText=v;
else display.innerText+=v;
}

function calculate(){
try{
display.innerText=eval(display.innerText);
}catch{
display.innerText="Error";
}
}

function clearDisplay(){
display.innerText="0";
}

function back(){
display.innerText=display.innerText.slice(0,-1)||"0";
}

function plusMinus(){
display.innerText=display.innerText*-1;
}
