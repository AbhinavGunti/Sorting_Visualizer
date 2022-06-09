document.getElementById("selectionsort").addEventListener("click", selectionsort);
function swap(x,y){
    const style1 = window.getComputedStyle(x);
    const style2 = window.getComputedStyle(y);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    x.style.height = transform2;
    y.style.height = transform1;
}
async function selectionsort(){
    disableButtons("selectionsort");
    bar_elements=document.getElementById("barContainer");
    var children_list=bar_elements.children;
    for(i=0;i<children_list.length-1;i++){
        max=i;
        for(j=i+1;j<children_list.length;j++){
            if(parseInt(window.getComputedStyle(children_list[j]).getPropertyValue("height"))<parseInt(window.getComputedStyle(children_list[max]).getPropertyValue("height"))){
                max=j;
            }
        }
        changeColor(children_list[max],"yellow");
        changeColor(children_list[i],"yellow");
        await new Promise(resolve => setTimeout(() => {resolve()},100-speed));
        swap(children_list[max],children_list[i]);
        changeColor(children_list[max],"#0E5933");
        changeColor(children_list[i],"#0E5933");
    }
    enableButtons("selectionsort");

}