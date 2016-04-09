var numArr = [1, 7, 3, 4];
var total = 0;
function arrAdd(array){
    for(var i = 0; i < numArr.length; i++){
        if(numArr[i] == 0){
          total +=numArr[i];
            console.log(total);
        }   
    }
}