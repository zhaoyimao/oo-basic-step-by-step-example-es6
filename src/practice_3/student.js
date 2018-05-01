"use strict";
import Person from "./person.js";
function Student(name,age,klass){
    Person.apply(this,arguments);
    this.klass=klass;
    this.introduce=function(){
        return "I am a Student. I am at Class "+this.klass+".";
    }
}

module.exports=Student;