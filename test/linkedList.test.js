const linkedList = require("../js/linkedList");

test("should return correct node from at function", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  expect(list.at(1).value).toBe("two");
});

test("should append list correctly", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  expect(list.size()).toBe(3);
  expect(list.at(0).value).toBe("one");
  expect(list.at(1).value).toBe("two");
  expect(list.at(2).value).toBe("three");

  expect(list.at(0).nextNode.value).toBe("two");
  expect(list.at(1).nextNode.value).toBe("three");
  expect(list.at(2).nextNode).toBe(null);

  list.append("four");

  expect(list.size()).toBe(4);
  expect(list.at(0).nextNode.value).toBe("two");
  expect(list.at(1).nextNode.value).toBe("three");
  expect(list.at(2).nextNode.value).toBe("four");
});

test("should prepend list correctly", () => {
  const list = new linkedList.LinkedList();
  list.prepend("one");
  list.prepend("two");
  list.prepend("three");

  expect(list.size()).toBe(3);
  expect(list.at(0).value).toBe("three");
  expect(list.at(1).value).toBe("two");
  expect(list.at(2).value).toBe("one");

  expect(list.at(0).nextNode.value).toBe("two");
  expect(list.at(1).nextNode.value).toBe("one");
  expect(list.at(2).nextNode).toBe(null);
});

test("should return head and tail correctly", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  expect(list.head().value).toBe("one");
  expect(list.tail().value).toBe("three");

  list.append("four");
  list.prepend("zero");

  expect(list.head().value).toBe("zero");
  expect(list.tail().value).toBe("four");

  expect(list.at(0).nextNode.value).toBe("one");
  expect(list.at(1).nextNode.value).toBe("two");
  expect(list.at(2).nextNode.value).toBe("three");
});

test("should pop from list correctly", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  list.pop();

  expect(list.tail().value).toBe("two");
  expect(list.at(1).nextNode).toBe(null);
});

test("should return boolean from contains function correctly", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  expect(list.contains("two")).toBe(true);
  expect(list.contains("five")).toBe(false);
});

test("should return correct index from find function", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  expect(list.find("three")).toBe(2);
  expect(list.find("five")).toBe(null);
});

test("should insert at index correctly", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  list.insertAt("five", 1);
  expect(list.size()).toBe(4);
  expect(list.at(0).value).toBe("one");
  expect(list.at(1).value).toBe("five");
  expect(list.at(2).value).toBe("two");
  expect(list.at(3).value).toBe("three");

  expect(list.at(0).nextNode.value).toBe("five");
  expect(list.at(1).nextNode.value).toBe("two");
  expect(list.at(2).nextNode.value).toBe("three");

  list.insertAt("zero", 0);
  expect(list.size()).toBe(5);
  expect(list.at(0).value).toBe("zero");
  expect(list.at(1).value).toBe("one");
  expect(list.at(2).value).toBe("five");
  expect(list.at(3).value).toBe("two");
  expect(list.at(4).value).toBe("three");
});

test("should remove at index correctly", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");

  list.removeAt(1);

  expect(list.size()).toBe(2);
  expect(list.at(0).value).toBe("one");
  expect(list.at(1).value).toBe("three");

  expect(list.at(0).nextNode.value).toBe("three");
  expect(list.at(1).nextNode).toBe(null);

  list.removeAt(1);
  expect(list.size()).toBe(1);
  expect(list.at(0).value).toBe("one");
  expect(list.at(0).nextNode).toBe(null);
});

test("should return correct string", () => {
  const list = new linkedList.LinkedList();
  list.append("one");
  list.append("two");
  list.append("three");
  expect(list.toString()).toBe("( one ) -> ( two ) -> ( three ) -> null");
  list.append("four");
  expect(list.toString()).toBe(
    "( one ) -> ( two ) -> ( three ) -> ( four ) -> null"
  );
});
