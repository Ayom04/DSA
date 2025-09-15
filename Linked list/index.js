class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
// 1 -> 2 -> 3 -> 4 -> 5 -> null

const linkedList = (head) => {
  const arr = [];
  _linkedList(head, arr);

  return arr;
};
const _linkedList = (head, arr) => {
  if (head === null) return;
  arr.push(head.value);
  _linkedList(head.next, arr);
};

console.log(linkedList(a));
// const linkedList =(head)=>{
//     const arr=[]

//     while(head != null){

//         arr.push(head.value)
//         head = head.next
//     }
//     return arr
// }
