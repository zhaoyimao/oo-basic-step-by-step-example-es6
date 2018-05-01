function Person(name,age){
    this.name=name;
    this.age=age;
    this.introduce=function(){
        console.log(this.basic_introduce());
        return this.basic_introduce();
    }
}
Person.prototype.basic_introduce=function(){
    return "My name is "+this.name+". I am "+this.age+" years old.";
}
const person = new Person("Tom", 21);
const introduce = person.introduce();
module.exports=Person;