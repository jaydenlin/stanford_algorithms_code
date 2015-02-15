var fs = require('fs');

var pickRandomProperty = function (obj) {
    var result;
    var count = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (Math.random() < 1 / ++count) {
                result = prop;
            }
        }
    }
    return result;
};

var randomEdge = function (adjList) {

    var edge = {};

    var count = Object.keys(adjList).length;

    edge.v1 = pickRandomProperty(adjList);

    edge.v2 = adjList[edge.v1][Math.floor(Math.random() * (adjList[edge.v1].length - 1))];


    return edge;

};





var kargerStep = function (adjList) {

    var edge = randomEdge(adjList);
    //1. concat v2's list to v1
    adjList[edge.v1] = adjList[edge.v1].concat(adjList[edge.v2]);
    //console.log(adjList[edge.v1]);
    //2. replace all appearance of v2 as v1
    for (var list in adjList) {
        if (adjList.hasOwnProperty(list)) {
            adjList[list] = adjList[list].map(function (item) {
                if (item === edge.v2) {
                    return edge.v1;
                } else {
                    return item;
                }

            });
        }
    }


    //console.log(adjList[edge.v1]);
    //3.remove self-loop
    adjList[edge.v1] = adjList[edge.v1].filter(function (item) {
        if (item === edge.v1) {
            return false;
        } else {
            return true;
        }

    });
    //console.log(adjList[edge.v1]);
    //4. remove v2's list
    delete adjList[edge.v2];

    return adjList;



};

var karger = function (adjList) {
    while (Object.keys(adjList).length > 2) {
        kargerStep(adjList);
    }
    //get min
    //console.log(adjList);
    for (var o in adjList) {
        if (adjList.hasOwnProperty(o)) {
            //console.log(o);

            min = min === null || (adjList[o].length < min) ? adjList[o].length : min;
        }
    }
    console.log('min candidate: ' + adjList[o].length);
    console.log('min: ' + min);

};


var getAdjList = function () {
    var adjList={};
    var lines = fs.readFileSync('kargerMinCut.txt', 'utf8').split('\n');
    for (var l in lines) {
        var line = lines[l];
        if (line !== "") {
            var array = line.replace('\r', '').split("\t").filter(function (item) {
                if (item === '') {
                    return false;
                } else {
                    return true;
                }

            });
            adjList[array[0]] = array.slice(1);

        }
    }
    
    return adjList;


};
/////////////
///Load data
////////////

//var lines = fs.readFileSync('test.txt', 'utf8').split('\n');
var adjList = {};
var min = null;



///////////////////////
///Do karger algorithm
///////////////////////

var listSize = Object.keys(adjList).length;
var i = 10000;
console.log(i);
while (i >= 0) {
    adjList=getAdjList();
    karger(adjList);
    i--;
}