export default class Queue {
	private arr:any[] = [];

	constructor(val : any) {
		this.arr.push(val);
	}

	enqueue(val : any) : void {
		this.arr.unshift(val);
	}
	dequeue() : any {

	}
}