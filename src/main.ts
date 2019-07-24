import { List } from './LinkedList/index';
import { DoublyList } from './DoublyLinkedList/index';

let dl = new DoublyList();
dl.insertStart(6);
dl.insertEnd(5);
dl.insertEnd(4);

dl.deleteEnd();
dl.deleteList();
dl.logForward();
