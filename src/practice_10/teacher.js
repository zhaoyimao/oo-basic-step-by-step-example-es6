let Person=require("./person.js");
let Class=require("./class.js");

function Teacher(id,name,age,klasses){
    this.klasses=klasses;
    Person.apply(this,[id,name,age]);
    let object=this.introduce();
    this.introduce=function(){
       // console.log("this"+this.klasses.length);
        if(this.klasses){
            let klass="";
            for(let i in klasses){
                klass=klass+klasses[i].number+", ";
            }
            klass = klass.substring(0, klass.length - 2);  
            return object+" I am a Teacher. I teach Class "+klass+".";
        }else{
            return object+" I am a Teacher. I teach No Class.";
        }
    }
}

module.exports=Teacher;
