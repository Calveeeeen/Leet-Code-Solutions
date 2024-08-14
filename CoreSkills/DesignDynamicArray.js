class DynamicArray{
    constructor(capacity){
        this.capacity = capacity;
        this.array = new Array(this.capacity).fill(0);
        this.length = 0;
    }

    get(i){
        return this.array[i];
    }

    set(i, n){
        this.array[i] = n;
    }

    pushback(n){
        if(this.length === this.capacity){
            this.resize();
        }
        this.array(this.length) = n;
        this.length++;
    }

    popback(){
        if(this.length > 0){
            this.length--;
        }
        return this.array[this.length];
    }

    resize(){
        this.capacity *= 2;
        let newArr = new Array(this.capacity).fill(0);
        for(let i=0; i<this.length; i++){
            newArr[i] = this.array[i];
        }
        this.array = newArr;
    }

    getSize(){
        return this.length;
    }

    getCapacity(){
        return this.capacity;
    }
}