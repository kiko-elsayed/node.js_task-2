const fs = require("fs")

// fs.writeFileSync("data1.text", "karim Elsayed")

const data10 = require("./Data10")

const yargs = require("yargs")

yargs.command({
    command : "add",
    describe : "to add an item",
    builder : {
        fname : {
            describe : "adding the first name",
            demandOption : true ,
            type : "string"
        } ,
        lname : {
            describe : "adding the last name",
            demandOption : true ,
            type : "string"
        }
    },
    handler : (x) => {
        data10.addPerson( x.id, x.fname , x.lname, x.age , x.address , x.phone)
    }
})

//            end adding function

//////////////////////////////////////

yargs.command({
    command : "delete",
    describe : "to delete an item",
    
    handler : (x) => {
        // console.log("you have already deleted the item")
        data10.deleteData(x.id)
    }
})

//   end delete
////////////////////////////////////////////////////

yargs.command({
    command : "read",
    describe : "to read all the items",
    builder :{
        id:{
            describe : "this is id description",
            demandOption : true ,
            type : "string"
        }
    },
    handler : (x) => {
        
        data10.readData(x.id)
    }
})

// end read 
///////////////////////////////////

yargs.command({
    command : "list",
    describe : "list data",
    handler : () => {
        data10.listData()
    }
})

/////end list 
//////////////////////////////////////

yargs.command({
    command : "totalDegree",
    describe : " calculate Average",
    handler : (x) => {
        data10.totalDegree(
            x.id,
            x.subject1 ,
            x.subject2 ,
            x.subject3 ,
            x.subject4 ,
            x.subject5 ,
            x.subject6 

        )
    }
})









// console.log (yargs.argv)
yargs.parse();