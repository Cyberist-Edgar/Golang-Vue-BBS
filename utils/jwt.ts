let jwt:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkVkZ2FyIiwiZXhwIjoxNTk2ODQ0ODg1LCJpYXQiOjE1OTYyNDAwODUsImlzcyI6IkVkZ2FyIiwic3ViIjoiand0IHRva2VuIGZvciBhdXRoIn0.Vc3PpGDspFIEGpODyQQC07cPWyMNtt7JbgHixMDUoDQ"
let payload:string = jwt.split(".")[1]

let decode:string = window.atob(payload)

console.log(decode)