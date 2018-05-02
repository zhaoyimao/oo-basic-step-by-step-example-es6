let Person=require("./person.js");
let Class=require("./class.js");
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses=klasses;
    }
    introduce(){
        if(this.klasses){
            let klass="";
            for(let i in this.klasses){
             klass=klass+this.klasses[i].number+", ";
            }
            klass = klass.substring(0, klass.length - 2); 
             return super.introduce()+` I am a Teacher. I teach Class ${klass}.`;
           }else{
            return super.introduce()+` I am a Teacher. I teach No Class.`;
        }
    }
    isTeaching(student){
        if(student.klass.isIn(this.klasses)){
            return true;
        }else{
            return false;
        }
    }
}
// function Teacher(id,name,age,klasses){
//     this.klasses=klasses;
//     Person.apply(this,[id,name,age]);
//     let object=this.introduce();
//     this.introduce=function(){
//         if(this.klasses){
//             let klass="";
//             for(let i in klasses){
//                 klass=klass+klasses[i].number+", ";
//             }
//             klass = klass.substring(0, klass.length - 2);  
//             return object+" I am a Teacher. I teach Class "+klass+".";
//         }else{
//             return object+" I am a Teacher. I teach No Class.";
//         }
//     }
//     this.isTeaching=function(student){
//         if(klasses.include(student.klass)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

module.exports=Teacher;
