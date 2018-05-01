// function Class(classNumber){
//     this.number=classNumber;
//     this.assignLeader=function(student){
//         if(student.klass.number==classNumber){
//             this.leader=student;
//         }else{
//             this.leader="";
//         }
//     }
//     this.getDisplayName=function(){
//         return "Class 2";
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
            }
         }
         getDisplayName(){
             return "Class 2";
           }
}

module.exports=Class;