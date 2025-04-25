
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
