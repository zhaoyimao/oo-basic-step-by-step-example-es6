//import Person from "./person.js";
let Person=require("./person.js");

function Worker(name,age){
    Person.apply(this,arguments);
    this.introduce=function(){
        return this.basic_introduce()+" I am a Worker. I have a job.";
    }
}
 
Worker.prototype=new Person();
Worker.prototype.constroductor=Worker;
module.exports=Worker;
