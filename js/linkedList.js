class LinkedList {
  #nodes;
  constructor() {
    this.#nodes = [];
  }

  head = () => {
    return this.#nodes[0];
  };
  tail = () => {
    return this.#nodes[this.#nodes.length - 1];
  };
  size = () => {
    return this.#nodes.length;
  };
  append = (value) => {
    const newNode = new Node(value);
    if (this.size() > 0) {
      this.tail().nextNode = newNode;
    }
    this.#nodes.push(newNode);
  };
  prepend = (value) => {
    const newNode = new Node(value, this.#nodes[0]);
    this.#nodes.unshift(newNode);
  };
  at = (index) => {
    return this.#nodes[index];
  };
  insertAt = (value, index) => {
    if (index > this.size() - 1 || index < 0) {
      throw new Error("invalid index");
    }
    if (index === this.size() - 1) {
      this.append(value);
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value, this.#nodes[index]);
    this.#nodes[index - 1].nextNode = newNode;
    this.#nodes.splice(index, 0, newNode);
  };
  removeAt = (index) => {
    if (index > this.size() - 1 || index < 0) {
      throw new Error("invalid index");
    }
    if (index === this.size() - 1) {
      this.pop();
      return;
    }

    if (index > 0) {
      this.#nodes[index - 1].nextNode = this.#nodes[index].nextNode;
    }
    this.#nodes.splice(index, 1);
  };
  pop = () => {
    this.#nodes.pop();
    if (this.size() > 0) {
      this.tail().nextNode = null;
    }
  };
  contains = (value) => {
    for (const node of this.#nodes) {
      if (node.value === value) {
        return true;
      }
    }
    return false;
  };
  find = (value) => {
    for (let i = 0; i < this.#nodes.length; i++) {
      if (this.#nodes[i].value === value) {
        return i;
      }
    }
    return null;
  };
  toString = () => {
    let resultString = "";
    for (const node of this.#nodes) {
      resultString += `( ${node.value} )`;
      if (node.nextNode != null) {
        resultString += ` -> `;
      } else {
        resultString += ` -> null`;
      }
    }
    return resultString;
  };
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

module.exports = {
  LinkedList,
  Node,
};
