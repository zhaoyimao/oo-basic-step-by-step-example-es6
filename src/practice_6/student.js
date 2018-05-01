let Person=require("./person.js");
// function student(name,age,klass){
//     this.klass=klass;
//     Person.apply(this,arguments);
//     let object=this.introduce();
//     this.introduce=function(){
//         return object+" I am a Student. I am at Class 2.";
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
