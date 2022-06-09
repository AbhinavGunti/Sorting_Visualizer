document.getElementById("insertionsort").addEventListener("click",insertionsort);
async function insertionsort(){
    disableButtons("insertionsort");
    bar_elements=document.getElementById("barContainer");
    var children_list=bar_elements.children;
    for(i=1;i<children_list.length;i++){
        ele=parseInt(window.getComputedStyle(children_list[i]).getPropertyValue("height"));
        j=i-1;
        while(j>=0 && parseInt(window.getComputedStyle(children_list[j]).getPropertyValue("height"))>ele){
            
            
            changeColor(children_list[j+1],"yellow");
            changeColor(children_list[j],"yellow");
            await new Promise(resolve => setTimeout(() => {resolve()},100-speed));

            children_list[j+1].style.height=parseInt(window.getComputedStyle(children_list[j]).getPropertyValue("height"));

            
            changeColor(children_list[j+1],"#0E5933");
            changeColor(children_list[j],"#0E5933");
            j=j-1;
        }
        

        changeColor(children_list[j+1],"yellow");
        changeColor(children_list[i],"yellow");

        await new Promise(resolve => setTimeout(() => {resolve()},100-speed));
    
        children_list[j+1].style.height=ele;

        changeColor(children_list[j+1],"#0E5933");
        changeColor(children_list[i],"#0E5933");
    }
    enableButtons("insertionsort");
}