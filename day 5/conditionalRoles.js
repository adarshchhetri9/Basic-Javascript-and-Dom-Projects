//  Create application with the following roles:
//  admin - Gets full access
//  subadmin - get acces to create/delete  courses
//  testprep - get access to create/delete tests
//  user - Gets access to consume content

var user = "user";

switch (user) {
  case "admin":
    return console.log("i m boss");
  case "subadmin":
    return console.log("i m boss no 2");
  case "testprep":
    return console.log("i do test");
  case "user":
    return console.log("i m fucked");

  default:
    return console.log("none of ur business");
}
