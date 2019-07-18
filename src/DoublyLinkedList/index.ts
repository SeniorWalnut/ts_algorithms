type Nullable<T> = T | null;

class DoublyListNode {
	public val : any;
	public next : Nullable<DoublyListNode>;
	public prev : Nullable<DoublyListNode>;

	constructor(
			value : any
	) {
		this.val = value ? null : null;
		this.next = null;
		this.prev = null;
	}
}

export class DoublyList {
	private head : DoublyListNode;

	constructor(val : any = null) {
		this.head = new DoublyListNode(val);
	}
	logForward() : void {} 
	logBackwards() : void {}
	append(val : any) : void {
		let node : DoublyListNode = new DoublyListNode(val);
		if (!this.head) {
			this.head = node;
			node.prev = this.head;
		} else {
			let cur : DoublyListNode = this.head;
			while (this.head.next !== null)
				this.head = this.head.next;
			this.head.next = cur;
			cur.prev = this.head;
		}
	}
	insertAfter(val : any, index : number = 0 ) : void {}
	insertBefore(val : any, index : number = 0 ) : void {}
	delete(val : any) : void {}
	find(val : any) : Nullable<DoublyListNode> {
		return null;
	}
}


