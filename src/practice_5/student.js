//import Person from "./person.js";
let Person=require("./person.js");

// function Student(name,age,klass){
//     this.klass=klass;
//     Person.apply(this,arguments);
//     let object=this.introduce();//中间变量存储父类中的Introduce
//     this.introduce=function(){
//        return object+" I am a Student. I am at Class "+this.klass+".";
//     }
// }
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+` I am a Student. I am at Class ${this.klass}.`;
    }
}

module.exports=Student;
