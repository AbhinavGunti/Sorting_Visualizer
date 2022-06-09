document.getElementById("quicksort").addEventListener("click", main);
function swap(x,y){
    const style1 = window.getComputedStyle(x);
    const style2 = window.getComputedStyle(y);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    x.style.height = transform2;
    y.style.height = transform1;
}
async function partition(low,high){
    p=parseInt(window.getComputedStyle(children_list[high]).getPropertyValue("height"));
    i=(low-1);
    for(j=low;j<high;j++){
        if(parseInt(window.getComputedStyle(children_list[j]).getPropertyValue("height"))<=p){
            i++;
            
            changeColor(children_list[i],"yellow");
            changeColor(children_list[j],"yellow");
            await new Promise(resolve => setTimeout(() => {resolve()},100-speed));

            swap(children_list[i],children_list[j]);

           
            changeColor(children_list[i],"#0E5933");
            changeColor(children_list[j],"#0E5933");
        }
    }
   
    changeColor(children_list[i+1],"yellow");
    changeColor(children_list[high],"yellow");
    await new Promise(resolve => setTimeout(() => {resolve()},100-speed));

    swap(children_list[i+1],children_list[high]);

    
    changeColor(children_list[i+1],"#0E5933");
    changeColor(children_list[high],"#0E5933");

    return (i+1);
}
async function quicksort(low,high){
    if(low<high){
        p=await partition(low,high);
        await quicksort(low,p-1);
        await quicksort(p+1,high);
    }
}
async function main(){
    disableButtons("quicksort");
    bar_elements=document.getElementById("barContainer");
    children_list=bar_elements.children;
    await quicksort(0,children_list.length-1);
    enableButtons("quicksort");
}