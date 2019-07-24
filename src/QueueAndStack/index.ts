export class Queue {
	private arr:any[] = [];

	constructor(val : any) {
		this.arr.push(val);
	}

	enqueue(val : any) : void {
		this.arr.unshift(val);
	}
	dequeue() : any {
		return this.arr.pop();
	}

	isEmpty() : boolean {
		return !!this.arr.length;
	}
	
}

export class Stack {
	private arr: any[] = [];
	constructor(val : any) {
		this.arr.push(val);
	}

	pop() :any {
		return this.arr.pop();
	}

	add(val : any) : void {
		this.arr.push(val);
	}

	isEmpty() : boolean {
		return !!this.arr.length;
	}

}