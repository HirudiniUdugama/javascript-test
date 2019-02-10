
class User{


    constructor(fname,lname,age){
       
        this.fname1=fname;
        this.lname1=lname;
        this.age1=age;
        
    }
    getfullname(){
        return `My full name is ${this.fname1} ${this.lname1}. `
    }
    editName(somename){
        const newname=somename.split(' ')
        this.fname=newname[0];
        this.lname=newname[1];
        return `My full name is ${this.fname} ${this.lname}. `

    }


}



const jhon= new User('jhon','buckey',80);
console.log(jhon.getfullname());
//jhon.editName('ruwan madushanka')
console.log(jhon.editName('ruwan madushanka'));