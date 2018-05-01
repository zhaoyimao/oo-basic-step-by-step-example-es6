
let Person=require("./person.js");
let Class=require("./class.js");

// function Student(name,age,klass){
//     this.klass=klass;
//     Person.apply(this,[name,age]);
//     let object=this.introduce();
//     this.introduce=function(){
//         return object+" I am a Student. I am at Class "+this.klass.number+"."; 
//     }
// }
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
    }
}

module.exports=Student;
