var jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkVkZ2FyIiwiZXhwIjoxNTk2ODQ0ODg1LCJpYXQiOjE1OTYyNDAwODUsImlzcyI6IkVkZ2FyIiwic3ViIjoiand0IHRva2VuIGZvciBhdXRoIn0.Vc3PpGDspFIEGpODyQQC07cPWyMNtt7JbgHixMDUoDQ";
var payload = jwt.split(".")[1];
var decode = atob(payload);
console.log(decode);
