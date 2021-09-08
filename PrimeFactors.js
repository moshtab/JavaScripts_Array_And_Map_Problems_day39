let num = 8;
let arr = new Array();
for(let i=2;i<num;i++){
    while(num%i==0){
        arr.push(i);
        num=num/i;

    }
}
if(num>=2){
   arr.push(num);
}
console.log(arr)