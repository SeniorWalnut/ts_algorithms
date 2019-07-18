type Nullable<T> = T | null;

class ListNode  {
	public next: Nullable<ListNode>
	public val: any;

	constructor(val?: any) {
		this.next = null;
		this.val = val ? val : null;
	}
}

export class List {
	private head: ListNode;

	constructor(val: any) {
		this.head = new ListNode(val);
	}

	append(val: any) : void {
		if (!this.head) 
			this.head = new ListNode(val);
		else {
			let current : ListNode = this.head;
			while (current.next !== null)
				current = current.next;
			current.next = new ListNode(val);
		}

	}

	log() : void {
		let current : ListNode = this.head;

		while (current !== null) {
			console.log(current.val);
			current = current.next;
		}

	}

	insert(val: any, index : number = 0) : void {
		let ind : number = 0;
		let cur : ListNode = this.head;
		let node : ListNode = new ListNode(val);

		if (index === 0) {
			node.next = this.head;
			this.head = node;
			return;
		}

		while (ind !== index - 1 && cur.next !== null) {
			ind++;
			cur = cur.next;
		}

		if (ind < index - 1 && cur.next === null) {
			cur.next = node;
			return;
		}

		node.next = cur.next;
		cur.next = node;

		return;
	}
	
	delete(val: any) : void {
		let ind : number = this.find(val);

		let cur : ListNode = this.head;
		if (ind !== null) {
			if (this.head.val === val)
				this.head = this.head.next;
			else {
				while (cur.next.val !== val)
					cur = cur.next;
				cur.next = cur.next.next;
				return;
			}
		}
	}
	
	find(val : any) : number {
		let cur : ListNode = this.head,
			  ind : number = 0;
		while (cur.next !== null) {
			if (cur.val === val)
				return ind;
			else {
				cur = cur.next;
				ind += 1
			};
		}
		return -1;
	}
} 
