let Person=require("./person.js");
let Class=require("./class.js");

function Student(id,name,age,klass){
    this.klass=klass;
    Person.apply(this,arguments);
    //console.log("name="+this.name);
    let object=this.introduce();
    this.introduce=function(){
        if(this.klass.leader){
            return object+" I am a Student. I am Leader of Class "+this.klass.number+".";

        }else{
            return object+" I am a Student. I am at Class "+this.klass.number+"."; 
        }
    }
}

module.exports=Student;
