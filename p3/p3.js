var fs=require('fs');


var randomEdge=function(adjList){
    
    var edge={};
    
    var count=Object.keys(adjList).length;
    
    edge.v1=(Math.floor(Math.random()*count)+1).toString();
    edge.v2=adjList[edge.v1][Math.floor(Math.random()*(adjList[edge.v1].length-1))];
        
    console.log(edge);
    return edge;

};


var kargerStep=function(adjList){

    var edge=randomEdge(adjList);
    //1. concat v2's list to v1
    adjList[edge.v1]=adjList[edge.v1].concat(adjList[edge.v2]);
    console.log(adjList[edge.v1]);
    //2. replace all appearance of v2 as v1
    adjList[edge.v1]=adjList[edge.v1].map(function(item){
        if(item===edge.v2){
            return edge.v1;
        }else{
            return item;
        }
    
    });
    console.log(adjList[edge.v1]);
    //3.remove self-loop
    adjList[edge.v1]=adjList[edge.v1].filter(function(item){
        if(item===edge.v1){
           return false;
        }else{
            return true;
        }
    
    });
    console.log(adjList[edge.v1]);
    //4. remove v2's list
    delete adjList[edge.v2];
    
    console.log(adjList);
    
    

};


//var lines = fs.readFileSync('kargerMinCut.txt', 'utf8').split('\n');
var lines = fs.readFileSync('test.txt', 'utf8').split('\n');
var adjList = {};

for (var l in lines){
  var line = lines[l];
  if(line!==""){
     var array=line.replace('\r','').split(" ");
     adjList[array[0]]=array.slice(1);
     
  }
}


//console.log(adjList);
kargerStep(adjList);

