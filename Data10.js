
const fs = require ("fs");

// لو علوز اخزن بيانات بيكون في فايل json

const addPerson = (id ,fname , lname, age ) =>{
    const allData = loadData();

    const dublicatedData = allData.filter((obj)=>{
        return(
            obj.id === id 
        ) 
    })

    console.log(dublicatedData)

    if(dublicatedData.length === 0){
        
            allData.push ({
            id : id ,
            fname : fname ,
            lname :lname,
            age :age,
            address :address ,
            phone : phone ,
            

        })
        saveAllData(allData)

    }else{
        console.log("already a dublicatedData id")

    }
}

//مهمة ال loaddata انها قرأت الفايل وحولته ل object
const loadData = () => {
    // const dataJson = fs.readFileSync("data10.json").toString();
    // return JSON.parse (dataJson)

    try{
        const dataJson = fs.readFileSync("data10.json").toString();
        return JSON.parse (dataJson)
    }catch{
        return []
    }
}
///////////////////////////////////////////

const saveAllData = (allData) =>{
    const saveAllDataJson = JSON.stringify(allData)

    fs.writeFileSync("data10.json" , saveAllDataJson)
}

                    //end added item function

///////////////////////////////////////////////////////////

const deleteData = (id) =>{
    const allData = loadData()

    //عاوز يعرضلي الداتا الموجوده بعد الحذف

    const dataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })

    console.log(dataToKeep)

    saveAllData(dataToKeep)
}

                    //end delete item function

///////////////////////////////////////////////////////////


const readData = (id) =>{
    const allData = loadData()

    const itemNeeded = allData.find( (obj)=>{
        return obj.id == id
    })

    console.log(itemNeeded)

}

//  end read 
/////////////////////////////////////////////////

const listData = ()=>{
    const allData = loadData()

    allData.forEach( (obj) => {
        console.log(obj.id ,obj.fname  , obj.lname , obj.age  , obj.address , obj.phone)
        
    });
}

// end read ------------
//////////////////////////////////////////////////

const totalDegree = (id , subject1 , subject2 ,subject3 , subject4 , subject5 , subject6 ) =>{
    const allData = loadData()

    const degrees = [ subject1 , subject2 , subject3 , subject4 , subject5 , subject6 ]
    const sumTotal = degrees.reduce( (a, b)=> a + b , 0)
    const average = Math.round( sumTotal / 6 )


    // console.log(dublicatedData)

    allData.push ({
        id: id,
        subject1 : subject1 ,
        subject2 : subject2 ,
        subject3 : subject3 ,
        subject4 : subject4 ,
        subject5 : subject5 ,
        subject6 : subject6 ,
        total : sumTotal,
        average : average
    })
    saveAllData(allData);
    

    

};













module.exports = {
    addPerson,
    deleteData,
    readData,
    listData,
    totalDegree
}





