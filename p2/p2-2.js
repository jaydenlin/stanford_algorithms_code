var fs=require('fs');
var totalOfComparisons=0;
var arrayData=[];
//always choose last element as pivot
var partition=function(arrayData,p,r){
    var m=r-p+1; 
    var i=p;
    var j=p+1;
    totalOfComparisons = totalOfComparisons + m-1;
    //choose last element as pivot
    var x=arrayData[r];
    //homework requirement, in real case this step is not really needed:
    //before the main Partition subroutine, you should exchange the pivot element (i.e., the last element) with the first element
    var tmp=arrayData[p];
    arrayData[p]=arrayData[r];
    arrayData[r]=tmp;

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

//var lines = fs.readFileSync('1000.txt', 'utf8').split('\n');
var testData = [];
for (var l in lines){
      var line = lines[l];
      //console.log(line);
      testData.push(line*1);
}
//console.log(testData.length);
var a=quicksort(testData,0,testData.length-1);
console.log(a);
console.log(totalOfComparisons);
