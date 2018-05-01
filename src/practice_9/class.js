class Class{
    constructor(classNumber){
        this.number=classNumber;
    }
    assignLeader(student){
       if(student.klass==this){
     this.leader=student;
        }else{
            this.leader="";
            console.log("It is not one of us.")
        }
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    appendMember(student){
        student.klass=this;
    }

}

module.exports=Class;