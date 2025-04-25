export default interface Predicate<T> {
    test(obj: T):boolean;
}
//Example: 
// type Point = {x: number; y: number};
// class PredXGreaterY implements Predicate<Point> {
//     test(obj: Point): boolean {
//         return obj.x > obj.y
//     }
    
// }