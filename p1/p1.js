var fs=require('fs');

var merge = function (array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    
    var inversionCount = 0;

    //mutilple conditions of loops, I used while to sove it
    //compare lowHaf and hightHalf items
    
    while (i < lowHalf.length && j < highHalf.length) {
        
        
        if (lowHalf[i] < highHalf[j]) {

            array[k] = lowHalf[i];

            i++;
        } else {
            
            //add inversion counts
            if (array[k] !== highHalf[j]) {
                inversionCount++;
            }

            array[k] = highHalf[j];
            j++;
        }

        k++;
    }
                                                                                                                   //if lowHalf does not run out then just copy the rest of it
    while (i < lowHalf.length) {

        array[k] = lowHalf[i];
        i++;
        k++;

    }

    //if highHalf does not run out then just copy the rest of it
    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
    
    return inversionCount;
                                                                                                                                                                                                                                
};


var inversionCounter = function (array, p, r) {

    var q = Math.floor((p + r) / 2);
    var inversionCountOfLowHalf=0;
    var inversionCountOfHighHalf=0;
    var inversionCountOfAll=0;
    if (p < r) {
        inversionCountOfLowHalf=inversionCounter(array, p, q);
        inversionCountOfHighHalf=inversionCounter(array, q + 1, r);
        inversionCountOfAll=merge(array,p,q,r)+inversionCountOfLowHalf+inversionCountOfHighHalf;

    }
    
    return inversionCountOfAll; 

};


var readLines=function (input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}


//add real data

var input = fs.createReadStream('integerArray.txt');
var testData=[];
readLines(input,function(data){
    console.log(testData);
    testData.push(parseInt(data,10));
    
    var count=inversionCounter(testData,0,testData.length-1);

    console.log("inversion count is:"+count);
    

});



