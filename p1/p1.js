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

var testData=[1,3,2,4,8,7];
var count=inversionCounter(testData,0,testData.length-1);

console.log(count);
