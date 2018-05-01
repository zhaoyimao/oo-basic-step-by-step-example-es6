let Person=require("./person.js");
let Class=require("./class.js");
// function Teacher(id,name,age,klass){
//     this.klass=klass;
//     Person.apply(this,[id,name,age]);
//     let object=this.introduce();
//     this.introduce=function(){
//         if(this.klass){
//         return object+" I am a Teacher. I teach Class "+this.klass.number+".";
//         }else{
//             return object+" I am a Teacher. I teach No Class.";
//         }
//     }
// }
class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+" I am a Teacher. I teach Class "+this.klass.number+".";
        }else{
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }
    }
}
module.exports=Teacher;
