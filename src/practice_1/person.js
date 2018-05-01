class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return "My name is "+this.name+". I am "+this.age+" years old.";
    }
}
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.introduce=function(){
//         return "My name is "+this.name+". I am "+this.age+" years old.";
//     }
// }
module.exports=Person;