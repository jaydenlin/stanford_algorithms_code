
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
    //put pivot into right place
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
    console.log(arrayData);
};

quicksort([5,6,1,8,2,7,3],0,6);


