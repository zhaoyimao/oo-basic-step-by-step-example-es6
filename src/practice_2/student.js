import Person from "./person.js";
function Student(name,age,klass){
    Person.apply(this, arguments);
    this.klass=klass;
    console.log(this.classname);
    this.introduce=function(){
        return "I am a Student. I am at Class "+this.klass+".";
    }
}
module.exports=Student;