var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 函数
var MySum = function (x, y) {
    return x + y;
};
// 接口(定义形状)
// interface searchFunc{
//     (x:number,y:number):number,
// }
// let mySearch:searchFunc = function(x,y){
//     return x+y;
// }
// console.log(mySearch(3,4));
// interface Person{
//     readonly name:string | number, // 只读
//     age?:number,
//     [propName:string]:any, // 索引签名
// }
// let tom:Person = {
//     name:111,
//     age:25,
//     from:1,
// }
// tom.age = 111;
// console.log(tom)
// class Animal { 
//     constructor(public name:string){
//         this.name = name;
//     }
//     static a = 'aaa'
//     static isAnimal(a:any){
//         return a instanceof Animal;
//     }
//     get surname(){
//         return this.name;
//     }
//     set surname(value){
//         this.name = value;
//     }
//     sayName(){
//         return this.name
//     }
// }
// 继承
// class Cat extends Animal{
//     constructor(public name:string){
//         super(name); // 调用父类构造函数
//     }   
//     sayHi(){
//         console.log(this.name);
//     }
// }
// let animal = new Animal('cz');
// animal.surname = 'Tom';
// console.log(Animal.isAnimal(animal));
// console.log(Animal.a);
/**
 * public  实例和子类都可以访问
 * private 实例和子类都不可以访问
 * protected 实例不可以访问 子类可以访问
 */
// class Animal {
//     name:string = ''
//     private sayName(){
//         console.log(this.name);
//     }
// }
// class Cat extends Animal{
//     sayHi(){
//         this.name = ''
//     }
// }
// let animal = new Animal();
/**
 * 抽象类
 * 抽象类不能实例化
 * 抽象类必须要实现
 */
// abstract class Animal{
//     public abstract render():any
//     public getProps(){
//         return 'props'
//     }
// }
// class Cat extends Animal{
//     render(){
//         return '实现抽象方法'
//     }
// }
/**
 *
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.render = function () {
    };
    Animal.prototype.getProps = function () {
        return 'props';
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
    };
    return Cat;
}(Animal));
var a = new Cat();
