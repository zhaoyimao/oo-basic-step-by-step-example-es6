class Class{
    constructor(classNumber){
        this.number=classNumber;
    }
    assignLeader(student){
        if(student.klass.number==this.number){
            this.leader=student;  
        }else{
            this.leader="";
            console.log("It is not one of us.");
        }
    }
    getDisplayName(){
        return "Class 2";  
    }
    appendMember(student){
        student.klass.number=this.number;
    }
}



module.exports=Class;