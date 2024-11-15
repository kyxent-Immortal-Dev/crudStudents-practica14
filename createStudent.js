import fs from "fs";

const myDb = "./students.json"

const createNewStudent = (dataUser) => {

    fs.readFile(myDb, "utf-8" , (error, data) => {
        if (error) {
            console.error("hubo  un problema al obtener todos los estudiantes ", error);
            return;
            
        }

        let myUsers = JSON.parse(data)

        let getStudents = myUsers.students

        getStudents.push(dataUser)

        fs.writeFile(myDb, JSON.stringify(getStudents), (error) => {
            if (error) {
                console.error("hubo un problema al crear el nuevo estudiante", error);
                return;
            }

            console.log("usuario creado exitosamente", getStudents);
            
        })

    })

} 

export default createNewStudent