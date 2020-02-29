### 环境安装
yarn global add typescript
### ts -> js
tsc 文件地址 --outFile 目标地址
### 跟踪文件修改
tsc 文件地址 --outDir ./dist --watch
### 数据类型
* boolean 
* number
* string
* 数组类型
~~~
let arr1:Array<Number> = [1,2]; // 使用泛型(<>)定义限定数组元素类型
let list:number[] = [1,2];
~~~
* 元组(定义数组中的元素的每个类型 Tuple)
~~~
let x:[string,number] = ['1',1];
~~~
* 枚举
~~~
enum Color {
    Red=2,Green=5,Blue=9
}
let c:Color = Color.Green; 
console.log(c); // 下标
let colorName:string = Color[2];
console.log(colorName); // Red
~~~
* any
~~~
// 自动类型推断&& any
let notSure:any = 5;
notSure = '111';
~~~
* void(空返回值,无返回)
~~~
function apple():void{
    console.log('11');
    return 9; // 报错
}
~~~
* 复合类型
~~~
let day:string | number = '111'; // 复合类型
~~~
* Never
* null undefined
* Symbol 
### 高级
* 接口
~~~
interface Person{
    readonly name:string | number, // 只读
    age?:number,
    [propName:string]:any, // 索引签名
}
let tom:Person = {
    name:111,
    age:25,
    from:1,
}
~~~
