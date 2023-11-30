class LinkedList {
  constructor(nodes) {
    this.nodes = nodes;
  }

  head = () => {
    return this.nodes[0];
  };
  tail = () => {
    return this.nodes[this.nodes.length - 1];
  };
  size = () => {
    return this.nodes.length;
  };
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
