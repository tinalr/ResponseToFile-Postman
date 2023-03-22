const jsonStr = pm.response.text()
const jsonObj = JSON.parse(jsonStr)
const obj = jsonObj.result

function jsonToCsv(items) {
    const header = Object.keys(items[0]);
  
    const headerString = header.join(',');
  
    // handle null or undefined values here
    const replacer = (key, value) => value ?? '';
  
    const rowItems = items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
  
    // join header and body, and break into separate lines
    const csv = [headerString, ...rowItems].join('\r\n');
  
    return csv;
  }
  
  const csv = jsonToCsv(obj);
  console.log(csv);

  // Please read the documentation https://github.com/sivcan/ResponseToFile-Postman
// The opts for the server, also includes the data to be written to file
let opts = {
    requestName: request.name || request.url,
    fileExtension: 'csv',
    mode: 'writeFile', // Change this to any function of the fs library of node to use it.
    uniqueIdentifier: true,
    responseData: csv
}; 

pm.sendRequest({
    url: 'http://localhost:3000/write',
    method: 'POST',
    header: 'Content-Type:application/json',
    body: {
        mode: 'raw',
        raw: JSON.stringify(opts)
    }
}, function (err, res) {
    console.log(err ? err : res);
});