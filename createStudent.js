import fs from "fs";

const myDb = "./students.json"

const createNewStudent = (dataUser) => {

    fs.readFile(myDb, "utf-8" , (error, data) => {
        if (error) {
            console.error("hubo  un problema al obtener todos los estudiantes ", error);
            return;
            
        }

        let myUsers = JSON.parse(data)


        myUsers.students.push(dataUser)

        fs.writeFile(myDb, JSON.stringify(myUsers), (error) => {
            if (error) {
                console.error("hubo un problema al crear el nuevo estudiante", error);
                return;
            }

            console.log("usuario creado exitosamente", myUsers);
            
        })

    })

} 

export default createNewStudent