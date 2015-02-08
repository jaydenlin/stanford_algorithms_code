var fs=require('fs');
var arrayData=[];
//always choose first element as pivot
var partition=function(arrayData,p,r){
  
    var i=p;
    var j=p+1;
    //choose first element as pivot
    var x=arrayData[p];

    while(j<=r){
      
      if(arrayData[j]>x){
         j++; 

      }else if(arrayData[j]<=x){
        var tmp=arrayData[j];
        i++;
        arrayData[j]=arrayData[i];
        arrayData[i]=tmp;
        j++;
      }

    }
    //put pivot into middle place
    var tmp=arrayData[i];
    arrayData[i]=arrayData[p];
    arrayData[p]=tmp;
    
    return i;

    //console.log(arrayData);  
}

var quicksort=function(arrayData,p,r){
    if(p<r){
      var q= partition(arrayData,p,r);
      quicksort(arrayData,p,q-1);
      quicksort(arrayData,q+1,r);
    }
    return arrayData;
};

var lines = fs.readFileSync('QuickSort.txt', 'utf8').split('\n');
var testData = [];
for (var l in lines){
      var line = lines[l];
      //console.log(line);
      testData.push(line*1);
}
//console.log(testData.length);
var a=quicksort(testData,0,testData.length-1);
console.log(a);

