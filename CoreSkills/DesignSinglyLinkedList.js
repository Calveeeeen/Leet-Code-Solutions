class listNode{
    constructor(val, nextNode=null){
        this.val = val;
        this.next = nextNode;
    }
}
class LinkedList {
    constructor() {
        this.head = new listNode(-1)
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i=0;
        let curr = this.head.next;
        while(curr !== null){
            if(i === index){
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new listNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if(newNode.next === null){
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new listNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i=0;
        let curr = this.head;
        while(i<index && curr!==null){
            i++;
            curr= curr.next;
        }
        if(curr !==null && curr.next !==null){
            if(curr.next === this.tail){
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
        let curr = this.head.next;
        while(curr !==null){
            arr.push(curr.val);
            curr= curr.next;
        }
        return arr;
    }
}
