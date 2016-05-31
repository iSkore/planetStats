var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("./planetCoreData.csv",function(err,result){
    console.log( JSON.stringify( result, null, 4 ) );
});
