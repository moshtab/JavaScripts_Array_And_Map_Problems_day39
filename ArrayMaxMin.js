let randomNum=0;
let arr = new Array();
 for(let i=0;i<10;i++){
 randomNum = Math.floor(100+Math.random()*900);
 arr[i]=randomNum;
}
console.log(arr);
let size = arr.length;

print2Smallest(arr,size);
print2Biggest(arr,size);
function print2Smallest(arr,size){
    let min =1000
    let min1 = min,min2 =min;
for(let i =0;i<10;i++){
    if(arr[i]<min1){
        min2=min1;
        min1=arr[i];
        
    }
    else if(arr[i]<min2){
        min2=arr[i];
    }
}
console.log("First Min :"+min1);
console.log("Second Min :"+min2);



}
function print2Biggest(arr,size){
    let max1 = arr[0];
    let mx1 = 0;
    for(let i =0;i<10;i++){
        if(arr[i]>max1){
            mx1=i;
            max1=arr[i];
        }
    }
    console.log("First Max :"+arr[mx1]);
    arr[mx1]=0;
    let max2 = arr[0];
    let mx2 = 0;
    for(let i =0;i<10;i++){
        if(arr[i]>max2){
            mx2=i;
            max2=arr[i];
        }
    }
    console.log("Second Max :"+arr[mx2]);
    
}



