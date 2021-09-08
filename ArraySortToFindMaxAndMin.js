let randomNum=0;
let arr = new Array();
 for(let i=0;i<10;i++){
 randomNum = Math.floor(100+Math.random()*900);
 arr[i]=randomNum;
}
console.log(arr);
let sorted = arr.sort((a,b) => a-b);
console.log(sorted);
let max1 = arr[9];
let max2 = arr[8];
let min1 = arr[0];
let min2 = arr[1];
console.log("First Max :"+max1);
console.log("Second Max :"+max2);
console.log("First Min :"+min1);
console.log("Second Min :"+min2);