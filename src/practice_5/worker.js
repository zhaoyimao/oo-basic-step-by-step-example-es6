var Person=require("./person.js");
// function Worker(name,age){
//     Person.apply(this,arguments);
//     let object=this.introduce();
//     this.introduce=function(){
//         return object+" I am a Teacher. I have a job.";
//     }
// }
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return super.introduce()+ ` I am a Teacher. I have a job.`;
    }
}
module.exports=Worker;
