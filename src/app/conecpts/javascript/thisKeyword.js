console.log("this:-",this)

var age = 28;

function getData(){
    console.log("age_1:-",age)
    console.log("this:-",this)
}
getData();

let testFun = ()=>{
    console.log("--arrow--this-",this)
}

testFun()
/*-----default-------*/
let userData = {
    fName : "Yograj",
    lName : "Ahirwar"
}

function printUData(state, dist){
    console.log(this.fName +" "+ this.lName +" "+ state +" "+ dist)
}

let finalData = printUData.bind(userData, "Delhi");
finalData("South-Delhi")
/*-------------------*/

/*-----custom-------*/
Function.prototype.myBind = function(...args){
    let obj = this
    let params = args.slice(1); 
    return function (...args2) {
        obj.apply(args[0],[...params, ...args2])
    }
}

let finalData2 = printUData.myBind(userData, "MP");
finalData2( "Chhatarpur")
/*-------------------*/
