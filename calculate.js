let m = 200,array1 = [],array2 = [],array3 = [];
for(i=1 ; i<m; i++){
    if(i%9==0){
        array1.push(i);
    }
}
for (let i = 0; i < array1.length; i++) {
    let temp = array1[i].toString();
    if(temp.length > 1){
        let temp1 = 0;
        for(let j = 0;j<temp.length;j++){
            temp1 += parseInt(temp[j]);   
        }
        if(temp1 == 9){
            array2.push(temp);
        }
    }
}
console.log(array2);
for(let i = 0;i<array2.length;i++){
let temp = array2[i].toString();
for(let j = 0;j<temp.length;j++){
if(temp[j]<temp[j+1] || temp[j] == temp[j+1]){
    if(temp.length == 2){
array3.push(temp);
    }else if(temp.length == 3 && temp[j+1]<temp[j+2] || temp[j+1] == temp[j+2]){
array3.push(temp)
    }else {
        continue;
    }
}
}
}
console.log(array3);
console.log([9,7,2,6,20,54,5].sort((a,b)=>{return a-b}));