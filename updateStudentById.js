import fs from "fs"


const myDB = "./students.json"


const updateStudentById = (id, newDataStudent) => {

    fs.readFile(myDB, "utf-8" , (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener todos los estudiantes", error);
            return;
        }

        const allStudents = JSON.parse(data)

        const students = allStudents.students === allStudents.students.findIndex(item => item.id === id)

        if (students > 0) {
            
            allStudents.students[students] = {
                ...allStudents.students[students],
                ...newDataStudent
            }

        }

        fs.writeFile(myDB, JSON.stringify(allStudents) , (error) => {
            if (error) {
                console.error("hubo un problema al actualizar al estudiante por el id ", error);
                return;
                
            }

            console.log("estudiante actualizado exitosamente; ", allStudents);
            
        })



    })

}

export default updateStudentById