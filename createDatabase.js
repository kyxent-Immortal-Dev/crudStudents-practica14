import fs from "fs";

const myDB = "./students.json"


const createNewDatabase = (data) => {


    fs.writeFile(myDB, JSON.stringify(data) , (error) => {
        if (error) {
            console.error("hubo un problema al crear la base de datos ", error);
            return;
        }
        console.log("base de datos creada exitosamente : 200 OK");
        
    })

}

export default createNewDatabase;