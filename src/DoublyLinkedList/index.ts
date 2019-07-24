type Nullable<T> = T | null;

class DoublyListNode {
	public val : any;
	public next : Nullable<DoublyListNode>;
	public prev : Nullable<DoublyListNode>;

	constructor(
			value? : any
	) {
		this.val = value ? value : null;
		this.next = null;
		this.prev = null;
	}
}

export class DoublyList {
	private head : DoublyListNode;
	private tail: DoublyListNode;

	constructor() {
		this.head = new DoublyListNode();
		this.tail = new DoublyListNode();

		this.headTailDefault();

	}

	headTailDefault() : void {
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	logForward() : void {
		let cur : DoublyListNode = this.head;
		for (;cur; cur = cur.next) {
			console.log(cur.val);
		}
	} 
	logBackwards() : void {
		let cur : DoublyListNode = this.tail;
		for (;cur; cur = cur.prev) {
			console.log(cur.val);
		}
	}
	
	insertStart(val : any) : void {
		let node : DoublyListNode = new DoublyListNode(val);

		
		if (!this.head.val) {
			this.head = node;
			this.headTailDefault();
		} else if (!this.tail.val) {
			this.tail = node;
			this.headTailDefault();
		} else {
			node.next = this.head;
			node.prev = null;
			this.head.prev = node;
			this.head = node;
		}
	}
	
	insertEnd(val : any) : void {
		let node : DoublyListNode = new DoublyListNode(val);

		
		if (!this.head.val) {
			this.head = node;
			this.headTailDefault();
		} else if (!this.tail.val) {
			this.tail = node;
			this.headTailDefault();
		} else {
			node.prev = this.tail;
			node.next = null;
			this.tail.next = node;
			this.tail = node;
		}
	}

	deleteStart() : void {
		if (!this.head.next) {
			this.deleteList();
		} else {
			this.head = this.head.next;
			this.headTailDefault();
		 	this.head.prev = null;
		}
	}

	deleteEnd() : void {
		if (!this.tail.prev) {
			this.deleteList();
		} else {
			this.tail = this.tail.prev;
			this.headTailDefault();
			this.tail.next = null;
		}
	}

	deleteList() : void {
		while (this.head) {
			this.head = this.head.next;
			if (this.head)
				this.head.prev = null; 
		}

		this.head = null;
	}

	find(val : any) : Nullable<DoublyListNode> {
		return null;
	}
}


