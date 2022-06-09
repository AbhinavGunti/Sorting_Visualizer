document.getElementById("newarray").addEventListener("click",createBars);
// document.getElementById("range1").addEventListener("oninput",createBars);
function createArray(){
    elements=[];
    for(i=0;i<size;i++){
        e=Math.ceil(Math.random()*100)
        elements.push(e);
    }
}
async function createBars(){
    enableButtons("all");
    document.getElementById("barContainer").innerHTML="";

    // await new Promise(resolve => setTimeout(() => {resolve()},10));  
    createArray();
    for(var i=0;i<size;i++){
        var bar=document.createElement("div");
        bar.className="bars";
        bar.style.backgroundColor="#0E5933";
        bar.style.width=(140-size)*0.15;
        bar.style.height=elements[i]*3+"px";
        bar.style.display="inline-block";
        bar.style.margin="2px";
        bar.style.verticalAlign="top";
        document.getElementById("barContainer").appendChild(bar);
    }
}
function disableButtons(button){
    sort=document.getElementById("sorts");
    sort_buttons=sort.children;
    length=sort_buttons.length;
    for(var i=0;i<length;i++){
        if(sort_buttons[i].id!=button){
            sort_buttons[i].disabled=true;
        }
        console.log(sort_buttons[i]);
    }
}
function enableButtons(button){
    sort=document.getElementById("sorts");
    sort_buttons=sort.children;
    length=sort_buttons.length;
    for(var i=0;i<length;i++){
        if(sort_buttons[i].id!=button || button=="all"){
            sort_buttons[i].disabled=false;
        }
    }
}
function changeColor(child,color){
    child.style.background=color;
}
slider1=document.getElementById("range1");
slider1.addEventListener("onchange",arraySize());
var size=100;
function arraySize(){
    size=slider1.value;
    console.log(size);
    createBars();
}
slider2=document.getElementById("range2");
slider2.addEventListener("onchange",execSpeed());
speed=0;
function execSpeed(){
    speed=slider2.value;
    console.log(speed);
}