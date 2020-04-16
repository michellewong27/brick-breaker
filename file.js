function countUniqueValues(array){
    var i = 0;
    for(var j = 1; j < array.length; j++){
     if(array[i] !== array[j]){
       i++;
       array[i] = array[j]
     }
    }
    return i + 1;
  }
  
   
  console.log(countUniqueValues[1,2,2,3,4,5])
