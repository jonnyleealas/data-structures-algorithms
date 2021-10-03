# Print


# Code
- empty array
- save head
- while there is a head
    - push head.val into arr
    - head = head.next
- return array
```

print(){
  let arr = [];
  let current = this.head;
  while(current){
    arr.push(current.val)
    current = current.next;
  }
  console.log(arr);
}
```