const jsonStr = pm.response.text();
const jsonObj = JSON.parse(jsonStr);
const nestedObj = jsonObj.result;

// The following code adapted from https://www.youtube.com/watch?v=U8lq1JdabF8
const convertNestedToSimpleJson = function (obj) {
	const dummyObj = {};
	for (let key in obj) {
		const value = obj[key];
		const type = typeof value;

		if (
			["string", "boolean"].includes(type) ||
			(type === "number" && !isNaN(value))
		) {
			dummyObj[key] = value;
		} else if (type === "object") {
			Object.assign(dummyObj, convertNestedToSimpleJson(value));
		}
	}
	return dummyObj;
};
const iterate = (object) => {
	const arr = [];
	for (let item in object) {
		arr.push(convertNestedToSimpleJson(object[item]));
	}
	return arr;
};
const simpleJSON = iterate(nestedObj);

//The following code from https://codingbeautydev.com/blog/javascript-convert-json-to-csv/
// This function only works if the there are no nested objects within the response
const jsonToCsv = (items) => {
	const header = Object.keys(items[0]);

	const headerString = header.join(",");

	// handle null or undefined values here
	const replacer = (key, value) => value ?? "";

	const rowItems = items.map((row) =>
		header
			.map((fieldName) => JSON.stringify(row[fieldName], replacer))
			.join(",")
	);

	// join header and body, and break into separate lines
	const csv = [headerString, ...rowItems].join("\r\n");

	return csv;
}

const csv = jsonToCsv(simpleJSON);
console.log(csv);

// Please read the documentation https://github.com/sivcan/ResponseToFile-Postman
// The opts for the server, also includes the data to be written to file
let opts = {
	requestName: request.name || request.url,
	fileExtension: "csv",
	mode: "writeFile", // Change this to any function of the fs library of node to use it.
	uniqueIdentifier: true,
	responseData: csv
};

pm.sendRequest(
	{
		url: "http://localhost:3000/write",
		method: "POST",
		header: "Content-Type:application/json",
		body: {
			mode: "raw",
			raw: JSON.stringify(opts)
		}
	},
	function (err, res) {
		console.log(err ? err : res);
	}
);
