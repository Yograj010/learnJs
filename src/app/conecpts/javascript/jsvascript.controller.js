class jsController{

    callBindApply = (req, res)=>{
        try{
            /*---------------------------------*/
            let student1 = {
                firstName : "Yograj",
                lastName : "Ahirwar",
                getemail: function(){
                    return this.firstName+"@gmail.com"
                }
            }
            
            console.log("student1 email: ",student1.getemail())

            let teacher1 = {
                firstName : "Yogi",
                lastName : "baba",
                getemail: function(){
                    return this.firstName+"@gmail.com"
                }
            }

            console.log("student1 email: ",teacher1.getemail())

            //writing same code for two different objects
            /*---------------------------------*/
            //Example 1
            let student2 = {
                firstName : "Yograj",
                lastName : "Ahirwar",
                getemail: function(){
                    return this.email = this.firstName+"@gmail.com"
                }
            }

            let teacher2 = {
                firstName : "Yogi",
                lastName : "baba"
            }
            
            console.log("teacher2 email: " ,student2.getemail.call(teacher2))
            function getSub(sub1, sub2){
                return this.subjects = [sub1, sub2]
            }

            getSub.apply(teacher2, ["Mathematics", "Social-studies"])

            console.log("teacher2: ", teacher2)

            function func1(profession, experience) {
                console.log(`My name is ${this.firstName} ${this.lastName}. I am ${profession} @ Swanbay Technologies India PVT LTD. I have total ${experience} years of experience.`)
            }

            //Example 2
            let userData1 = {
                firstName : "Yograj",
                lastName : "Ahirwar"
            }

            let userData2 = {
                firstName : "Yogi",
                lastName : "baba"
            }
            
            func1.call(userData1, "SD", 2);

            let data = ["SD", 2]
            func1.apply(userData2, data);

            let myFunc = func1.bind(userData1, "JSD", 2)
            myFunc()
            console.log("-this--",this)
            return res.status(200).json({"Success":"true"})
        }catch(err){
            console.log("// Debug: catch err:- ",err)
        }
    }

}

module.exports = jsController;