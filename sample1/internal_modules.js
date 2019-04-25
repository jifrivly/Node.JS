const my_os = require("os");

console.log("System bit details : " + my_os.arch());
console.log("System OS details : " + my_os.platform());
console.log("System User Information : ");
console.log(my_os.userInfo());

console.log("Network Details : ");
console.log(my_os.networkInterfaces());

const myModule = require("./addModule");

a = 5;
b = 0;
console.log(myModule.addNum(a,b));
console.log(myModule.subNum(a,b));
console.log(myModule.mulNum(a,b));
console.log(myModule.devNum(a,b));


