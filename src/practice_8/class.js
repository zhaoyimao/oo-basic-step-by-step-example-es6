class Class{
    constructor(classNumber){
        this.number=classNumber;
    }
    assignLeader(student){
        if(student.klass==this){
             this.leader=student;
            }else{
             this.leader="";
            }
         }
         getDisplayName(){
             return `Class ${this.number}`;
           }
}

module.exports=Class;