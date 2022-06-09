document.getElementById("bubblesort").addEventListener("click", bubbleSort);
async function swap(x,y){
    const style1 = window.getComputedStyle(x);
    const style2 = window.getComputedStyle(y);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    x.style.height = transform2;
    y.style.height = transform1;
}
async function bubbleSort(){
    disableButtons("bubblesort");
    bar_elements=document.getElementById("barContainer");
    var children_list=bar_elements.children;

    for(i=0;i<(children_list.length-1);i++){
        for(j=0;j<(children_list.length-i-1);j++){
            if(parseInt(window.getComputedStyle(children_list[j]).getPropertyValue("height"))>parseInt(window.getComputedStyle(children_list[j+1]).getPropertyValue("height"))){
                changeColor(children_list[j],"yellow");
                changeColor(children_list[j+1],"yellow");
                await new Promise(resolve => setTimeout(() => {resolve()},100-speed));

                await swap(children_list[j],children_list[j+1]);

                changeColor(children_list[j],"#0E5933");
                changeColor(children_list[j+1],"#0E5933");
            }
        }
    }
    enableButtons("bubblesort");
}