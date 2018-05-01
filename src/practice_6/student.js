let Person=require("./person.js");
function student(name,age,klass){
    this.klass=klass;
    Person.apply(this,arguments);
    let object=this.introduce();
    this.introduce=function(){
        return object+" I am a Student. I am at Class 2.";
    }
}
module.exports=student;
