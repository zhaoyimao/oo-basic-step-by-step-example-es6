"use strict";
import Person from "./person.js";
// function Worker(name,age){
//     Person.apply(this,arguments);
//     this.introduce=function(){
//         return "I am a Worker. I have a job.";
//     }
// }
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `I am a Worker. I have a job.`;
    }
}
module.exports=Worker;
