const fs = require('fs');

fs.readFile('wipro.json', function (err, data) {
    if (err) throw err;
    let info = JSON.parse(data);
    console.log(info);
    info.company = 'WiproLtd';
     data = JSON.stringify(info);
    let newinfo = JSON.parse(data);
    fs.writeFileSync('wiproLdt.json', data);
    console.log(newinfo);

});

