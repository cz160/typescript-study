// 函数
let MySum:(x:number,y:number)=>number = function(x:number,y:number):number{
    return x+y;
}
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
class Animal{
    public  render():void{

    }
    public getProps(){
        return 'props'
    }
}
class Cat extends Animal{
    public sayHi(){

    }
}
let a:Animal = new Cat();
