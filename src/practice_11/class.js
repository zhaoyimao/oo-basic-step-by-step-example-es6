// function Class(classNumber){
//     this.number=classNumber;
//     this.assignLeader=function(student){
//         if(student.klass.number===classNumber){
//             this.leader=student;
//         }else{
//             this.leader="";
//             console.log("It is not one of us.")
//         }
//     }
//     this.getDisplayName=function(){
//         return "Class 2";
//     }
//     this.appendMember=function(student){
//         student.klass.number=this.number;
//     }
//     this.registerAssignLeaderListener=function(teacher){
//      console.log("I am Tom. I know Jerry become Leader of Class 2."); 
//     }
//     this.registerJoinListener=function(teacher){
//         console.log("I am Tom. I know Jerry has joined Class 2.");
//     }
//     this.isIn=function(){
        
//     }
// }
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
        // this.registerJoinListener=function(teacher){
        //     console.log("I am Tom. I know Jerry has joined Class 2.");
        // }
        }
    
    
    registerJoinListener(teacher){
        console.log("I am Tom. I know Jerry has joined Class 2.");
    }
    registerAssignLeaderListener(teacher){
        console.log("I am Tom. I know Jerry become Leader of Class 2."); 
    }

}


module.exports=Class;