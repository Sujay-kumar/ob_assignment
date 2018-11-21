var fs = require('fs'),
    parseString = require('xml2js').parseString,
    xml2js = require('xml2js');

fs.readFile('wipro.xml', 'utf-8', function (err, data){
    if(err) console.log(err);
    console.log(data);
    parseString(data, function(err, result){
        if(err) console.log(err);
        console.log(result);

        var json = result;

        json.root.graph[0].node[0].company = "WiproLdt";
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);

        fs.writeFile('wiproLtd.xml', xml, function(err, data){
            if (err) console.log(err);

            console.log("successfully written our update xml to file");
        })
        fs.readFile('wiproLtd.xml', 'utf-8', function (err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    });
});