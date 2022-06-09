document.getElementById("mergesort").addEventListener("click", merge);
var flag;
async function merge(){
    flag=0;
    disableButtons("mergesort");
    bar_elements=document.getElementById("barContainer");
    children_list=bar_elements.children;
    size_bars=children_list.length;
    await merge_partition(0,size_bars-1);
    enableButtons("mergesort");
}
document.getElementById("newarray").addEventListener("click",function(){flag=1;});
document.getElementById("range1").addEventListener("input",function(){flag=1;});
async function merge_sort(start,mid,end){
    if(flag==1){
        throw new Error();
    }
    var p=start,q=mid+1;
    var arr=[],k=0;
    for(var i=start;i<=end;i++){
        if(p>mid){
            arr[k++]=parseInt(window.getComputedStyle(children_list[q++]).getPropertyValue("height"))
            changeColor(children_list[q-1],"yellow");

            await new Promise(resolve => setTimeout(() => {resolve()},100-speed));
        }
        else if(q>end){
            arr[k++]=parseInt(window.getComputedStyle(children_list[p++]).getPropertyValue("height"))
            changeColor(children_list[p-1],"yellow");

            await new Promise(resolve => setTimeout(() => {resolve()},100-speed));
        }
        else if(parseInt(window.getComputedStyle(children_list[p]).getPropertyValue("height"))<parseInt(window.getComputedStyle(children_list[q]).getPropertyValue("height"))){
            arr[k++]=parseInt(window.getComputedStyle(children_list[p++]).getPropertyValue("height"));
            changeColor(children_list[p-1],"yellow");

            await new Promise(resolve => setTimeout(() => {resolve()},100-speed));
        }
        else{
            arr[k++]=parseInt(window.getComputedStyle(children_list[q++]).getPropertyValue("height"))
            changeColor(children_list[q-1],"yellow");

            await new Promise(resolve => setTimeout(() => {resolve()},100-speed));
        }
    }
    for(var t=0;t<k;t++){
        children_list[start++].style.height = arr[t];
        await new Promise(resolve => setTimeout(() => {resolve()},100-speed));
        changeColor(children_list[start-1],"#0E5933");

    }
}
async function merge_partition(start,end){
    if(flag==1){
        throw new Error();
    }
    if(start<end){
        if(flag==1){
            throw new Error();
        }
        var mid=Math.floor((start+end)/2);
        changeColor(children_list[mid],"red");
        await merge_partition(start,mid);
        await merge_partition(mid+1,end);
        await merge_sort(start,mid,end);
    }
}