import Person from "./person.js";
function Student(name,age,klass){
    Person.apply(this,arguments);
    this.klass=klass;
    this.introduce=function(){
        return this.basic_introduce()+" I am a Student. I am at Class "+this.klass+"."
    }
}
Student.prototype=new Person();
Student.prototype.constructor=Student;
module.exports=Student;
