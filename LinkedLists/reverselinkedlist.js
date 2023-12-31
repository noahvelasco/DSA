class LinkedList{
    constructor (head = null){
        this.head = head
    }

}

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }

}

function prntLinkedList (ll){
    let tmp = ll.head
    while (tmp){
        console.log(tmp.value)
        tmp=tmp.next
    }
}

function revIter (linkedList){
    let tempArr = []
    
    //copy all elements of LL in a reverse fashion into an array
    let tmp = linkedList.head
    while(tmp){
        tempArr.unshift(tmp.value)
        tmp=tmp.next
    }

    //copy array as-is into new array
    tmp = linkedList.head
    let i = 0;
    while(tmp){
        tmp.value=tempArr[i]
        tmp=tmp.next
        i++
    }

}

function revRec (node, prev=null){

    if (!node){
        return prev
    }
 
    const nextNode = node.next
    node.next=prev


    if (!nextNode) {
        // Update the head of the linked list after the reversal is complete
        linkedList.head = node;
      }
      
    return revRec(nextNode, node)

}

// create nodes
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

//connect nodes
node1.next = node2
node2.next = node3

//create linkedlist and set head
let linkedList = new LinkedList(node1)

console.log("Before Reverse")
prntLinkedList(linkedList)


//------ uncomment implementation you want to see work 

// revIter(linkedList)
revRec(linkedList.head)


console.log("After Reverse")
prntLinkedList(linkedList)





