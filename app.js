const linkedList = require("./js/linkedList");

const list = new linkedList.LinkedList();
list.append("one");
list.append("two");
list.append("three");

console.log(list.toString());
