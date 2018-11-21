const soapRequest = require('easy-soap-request');
const fs = require('fs');

// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('test/zipCodeEnvelope.xml', 'utf-8');

// usage of module
(async () => {
    const { response } = await soapRequest(url, headers, xml, 1000); // Optional timeout parameter(milliseconds)
    const { body, statusCode } = response;
    console.log(body);
    console.log(statusCode);
})();