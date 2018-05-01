class Class{
    constructor(classNumer){
        this.number=classNumer;
    }
   getDisplayName(){
       return `Class ${this.number}`;
   }
}

module.exports=Class;

