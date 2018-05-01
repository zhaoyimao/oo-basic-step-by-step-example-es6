let Person=require("./person.js");
let Class=require("./class.js");
let Student=require("./student.js");
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass.number}.`;
        }else{
            return super.introduce()+` I am a Teacher. I teach No Class.`; 
        }
    }
    introduceWith(studentJerry){
        if(this.klass==studentJerry.klass){
            return super.introduce()+" I am a Teacher. I teach "+studentJerry.name+".";
        }else{
            return super.introduce()+" I am a Teacher. I don't teach Jerry.";
        }
    }

}
// function Teacher(name,age,klass){
//     this.klass=klass;
//     Person.apply(this,arguments);
//     let object=this.introduce();
//     this.introduce=function(){
//         if(this.klass){
//             return object+" I am a Teacher. I teach Class "+this.klass.number+".";
//         }else{
//             return object+" I am a Teacher. I teach No Class.";
//         }
//     }
//     this.introduceWith=function(studentJerry){
//         if(studentJerry.klass.number==this.klass.number){
//             return object+" I am a Teacher. I teach "+studentJerry.name+".";
//         }else{
//             return object+" I am a Teacher. I don't teach Jerry.";
//         }
//     }
// }


module.exports=Teacher;