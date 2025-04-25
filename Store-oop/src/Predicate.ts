export default interface Predicate<T> {
    test(obj: T):boolean;
}
