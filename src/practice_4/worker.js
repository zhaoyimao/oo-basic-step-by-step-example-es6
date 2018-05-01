//import Person from "./person.js";
let Person=require("./person.js");

// function Worker(name,age){
//     Person.apply(this,arguments);
//     this.introduce=function(){
//         return this.basic_introduce()+" I am a Worker. I have a job.";
//     }
// }
 class Worker extends Person{
     constructor(name,age){
         super(name,age);
     }
     introduce(){
         return super.basic_introduce()+` I am a Worker. I have a job.`;
     }
 }

module.exports=Worker;
