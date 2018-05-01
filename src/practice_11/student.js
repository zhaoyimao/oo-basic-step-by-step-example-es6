let Person=require("./person.js");
let Class=require("./class.js");
class Student extends Person{
    constructor(id,name,age,klass){
       super(id,name,age);
       this.klass=klass;
    }
   introduce(){
       if(this.klass.leader==this){
        return super.introduce()+ ` I am a Student. I am Leader of Class ${this.klass.number}.`;
       }else{
           return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
       }
   }

}
// function Student(id,name,age,klass){
//     this.klass=klass;
//     Person.apply(this,arguments);
//     let object=this.introduce();
//     this.introduce=function(){
//         if(klass.leader){
//             return object+" I am a Student. I am Leader of Class "+this.klass.number+".";
//         }else{
//             return object+" I am a Student. I am at Class "+this.klass.number+".";
//         }
//     }
// }

module.exports=Student;

