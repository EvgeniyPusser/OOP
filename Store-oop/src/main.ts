// //TODO
// //Write simple test based on console.log functionality for testing Store class methods

// import Store from "./Store.ts";

// //For example T msay be class Employee like
// class Employee {
//     constructor(public id: string, public name: string, public salary: number) {

//     }
// }
// const store = new Store<Employee> ();
// //some test methods

import Store from "./Store.ts";
import Predicate from "./Predicate.ts";

// 👤 Example class that implements Identifiable
class Employee {
  constructor(public id: string, public name: string, public salary: number) {}
}

// 💰 Predicate class: salary greater than a threshold
class SalaryMoreThan implements Predicate<Employee> {
  constructor(private threshold: number) {}
  test(emp: Employee): boolean {
    return emp.salary > this.threshold;
  }
}

// 🧪 Run test cases
const store = new Store<Employee>();

store.add(new Employee("1", "Alice", 5000));
store.add(new Employee("2", "Bob", 7000));
store.add(new Employee("3", "Charlie", 3000));

console.log("🔍 Find employee by ID:");
console.log(store.getById("2")); // Bob

console.log("💰 Employees with salary > 4000:");
console.log(store.find(new SalaryMoreThan(4000))); // Alice, Bob

console.log("❌ Removing '2':");
console.log(store.remove("2")); // Bob

console.log("🔁 All employees:");
console.log(store.find({ test: () => true })); // Alice, Charlie




