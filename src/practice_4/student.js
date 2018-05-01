import Person from "./person.js";
// function Student(name,age,klass){
//     Person.apply(this,arguments);
//     this.klass=klass;
//     this.introduce=function(){
//         return this.basic_introduce()+" I am a Student. I am at Class "+this.klass+"."
//     }
// }
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.basic_introduce()+` I am a Student. I am at Class ${this.klass}.`;
    }
}
module.exports=Student;
