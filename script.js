let ClassID;


function DisplaySelector(ClassID) {
    readTextFile("/pamokos/"+ClassID+".json", function(text){
        var data = JSON.parse(text);
        console.log(data);
    });
}



//read json function from some stackoverflow
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
