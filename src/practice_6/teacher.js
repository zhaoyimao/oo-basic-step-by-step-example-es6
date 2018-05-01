let Person=require("./person.js");
function Teacher(name,age,klass){
    this.klass=klass;
    Person.apply(this,[name,age]);
    let object=this.introduce();
    this.introduce=function(){
        if(klass){
            return object+" I am a Teacher. I teach Class "+klass+".";
        }else{
            return object+" I am a Teacher. I teach No Class."
        }
    }
}
module.exports=Teacher;
