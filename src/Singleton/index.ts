import { Chocolate, ChocolateSingleton } from "./chocolate";

const instance1 = new Chocolate();
const instance2 = new Chocolate();

console.log('singleton', instance1 === instance2);

// error: Constructor of class 'ChocolateSingleton' is private and only accessible within the class declaration.
// const instance3 = new ChocolateSingleton()

const singleton1 = ChocolateSingleton.getInstance();
const singleton2 = ChocolateSingleton.getInstance();

console.log('singleton', singleton1 === singleton2);