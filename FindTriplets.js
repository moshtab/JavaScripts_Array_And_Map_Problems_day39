let arr =[1,-1,0,3,-2];
let size = arr.length;
findTriplets(arr,size);
function findTriplets(arr,size){
    let found =false;
    for(let i=0;i<size;i++){
        for(let j=i+1;j<size;j++){
            for(let k=j+1;k<size;k++){
                if(arr[i]+arr[j]+arr[k]==0){
                    console.log(arr[i]+" "+arr[j]+" "+arr[k]);
                    found=true;
                }
            }
        }
    }
    if(found==false){
        console.log("No Triplets found")
    }

}