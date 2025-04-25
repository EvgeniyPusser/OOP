// import Identifiable from "./Identifiable.ts";
// import Predicate from "./Predicate.ts";

// export default class Store<T extends Identifiable> {
//     items: T[] = [];
//   add(item: T): void {
      
//        //TODO
//        //adds new item with validation of unique id value
//        //if item with the given id exists the method throws exception
//     }
//     getById(id: string): T | undefined {
//         //TODO
//         //returns item with the given id or undefined if such item doesn't exist
//         return undefined;
//     }
//     find(predicate: Predicate<T>): T[] {
//         //TODO
//         //returns array of items matching the given predicate
//         return [];
//     }
//     remove(id: string): T | undefined {
//         //TODO
//         //removes item with the given id value
//         //returns a reference to being removed item or undefined if an item doesn't exist
//         return undefined;
//     }
// }

import Identifiable from "./Identifiable.ts";
import Predicate from "./Predicate.ts";

export default class Store<T extends Identifiable> {
  private items: T[] = [];

  add(item: T): void {
    const exists = this.items.some(i => i.id === item.id);
    if (exists) {
      throw new Error(`Item with id "${item.id}" already exists.`);
    }
    this.items.push(item);
  }

  getById(id: string): T | undefined {
    return this.items.find(item => item.id === id);
  }

  find(predicate: Predicate<T>): T[] {
    return this.items.filter(item => predicate.test(item));
  }

  remove(id: string): T | undefined {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return undefined;
    const [removed] = this.items.splice(index, 1);
    return removed;
  }
}
