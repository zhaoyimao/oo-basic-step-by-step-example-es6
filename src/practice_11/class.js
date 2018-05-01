class Class{
    constructor(classNumber){
        this.number=classNumber;
    }
    assignLeader(student){
        if(student.klass==this){
            this.leader=student; 
            if(this._teacher){
                console.log(`I am ${this._teacher.name}. I know ${student.name} become Leader of Class ${this.number}.`);
            } 
        }else{
            this.leader="";
            console.log("It is not one of us.");
        }
    }
    getDisplayName(){
       return `Class ${this.number}`;
    }
    appendMember(student){
        student.klass=this;
        if(this._teacher){
            console.log(`I am ${this._teacher.name}. I know ${student.name} has joined Class ${this.number}.`);
        }
        }
    registerJoinListener(teacher){
        if(teacher.klasses.includes(this)){
            this._teacher=teacher;
        }
    }
    registerAssignLeaderListener(teacher){
        if(teacher.klasses.includes(this)){
            this._teacher=teacher;
        }
    }
    
    isIn(teacher,student){
        if(teacher.klasses.includes(student.klass)){
            return true;
        }else{
            return false;
        }
    }

}


module.exports=Class;